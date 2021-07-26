import { Injectable } from '@angular/core';
import { CardsService } from './cards.service';
import { CardComponent } from './components/card/card.component';
import { AUDIO_PLAY_DELAY } from './constants/delay';
import { CardsContent } from './shared/card-content';
import { GameModeType } from './shared/game-mode';
import { Stars } from './shared/stars';
import { StarsService } from './stars.service';

@Injectable({
  providedIn: 'root',
})
export class GameLogicService {
  cards: CardsContent[][] = [];

  inactive: CardComponent[] = [];

  audio: string[] = [];

  errorSound = 'assets/audio/error.wav';

  successSound = 'assets/audio/success.wav';

  answer!: boolean;

  mode!: GameModeType;

  isSoundPlayed = false;

  currentWord!: string;

  rightWord = false;

  constructor(private cardsService: CardsService, private starsService: StarsService) {
    this.cards = this.cardsService.getAllCards();
  }

  getAudioSrc(id: number): string[] {
    this.audio = this.cards[id].map((el) => el.audioSrc).sort(() => Math.random() - 0.5);
    return this.audio;
  }

  getCurrentWord(): string {
    return this.currentWord;
  }

  async isRightWord(): Promise<boolean> {
    return this.rightWord;
  }

  setCurrentWord(word: string): void {
    this.rightWord = false;
    this.currentWord = word;
  }

  activateCards(): void {
    if (this.inactive.length === 8) {
      this.inactive.forEach((card) => card.setActiveCard());
    }
  }

  game(card: CardComponent, audio: string): void {
    this.answer = audio === this.getCurrentWord();
    const newStar: Stars = {};
    this.isSoundPlayed = true;
    if (!this.answer) {
      const warning: HTMLAudioElement = new Audio();
      warning.src = this.errorSound;
      warning.load();
      warning.play();
      newStar.color = 'warn';
    } else {
      const success = new Audio();
      success.src = this.successSound;
      success.load();
      success.play();
      newStar.class = 'gold';
      this.rightWord = true;
      this.inactive.push(card);
      card.setInactiveCard();
    }
    setTimeout(() => {
      this.isSoundPlayed = false;
    }, AUDIO_PLAY_DELAY);
    this.starsService.addStar(newStar);
  }
}
