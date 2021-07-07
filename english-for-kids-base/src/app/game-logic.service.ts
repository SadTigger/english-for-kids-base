import { Injectable } from '@angular/core';
import { CardsService } from './cards.service';
import { CardsContent } from './shared/card-content';
import { typeGameMode } from './shared/game-mode';
import { Stars } from './shared/stars';
import { StarsService } from './stars.service';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  cards: CardsContent[][] = [];
  audio: string[] = [];
  errorSound: string = 'assets/audio/error.wav'
  successSound: string = 'assets/audio/success.wav'
  answer!: boolean;
  mode!: typeGameMode;
  isSoundPlayed: boolean = false;
  currentWord!: string;
  rightWord: boolean = false;
  constructor(private _cardsService: CardsService, private _starsService: StarsService) {
    this.cards = this._cardsService.getAllCards();
  }

  getAudioSrc(id: number): string[] {
    this.audio = this.cards[id].map(el => el.audioSrc).sort(() => Math.random() - 0.5);
    return this.audio;
  }

  getWord(id: number) {
  }

  getCurrentWord() {
    return this.currentWord;
  }

  async isRightWord() {
    return this.rightWord
  }

  setCurrentWord(word: string) {
    this.rightWord = false;
    this.currentWord = word;
  }

  game(audio: string) {
    this.answer = audio === this.getCurrentWord();
    const newStar: Stars = {};
    this.isSoundPlayed = true;
    if (!this.answer)  {
      const warning = new Audio();
      warning.src = this.errorSound;
      warning.load();
      warning.play();
      setTimeout(() => {
        this.isSoundPlayed = false;
      }, 1500)
      newStar.color = 'warn';
    } else {
      const success = new Audio();
      success.src = this.successSound;
      success.load();
      success.play();
      setTimeout(() => {
        this.isSoundPlayed = false;
      }, 1500)
      newStar.class = 'gold';
      this.rightWord = true;
    }
    this._starsService.addStar(newStar);
  }
}
