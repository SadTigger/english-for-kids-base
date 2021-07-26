import { Component, Input, DoCheck } from '@angular/core';
import { AUDIO_PLAY_DELAY } from 'src/app/constants/delay';
import { GameLogicService } from 'src/app/game-logic.service';
import { GameModeService } from 'src/app/game-mode.service';
import { GameStatusService } from 'src/app/game-status.service';
import { GameModeType } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements DoCheck {
  isFlipped = false;

  isSoundPlayed = false;

  @Input() word?: string;

  @Input() translation?: string;

  @Input() image?: string;

  @Input() audioSrc!: string;

  @Input() id?: number;

  errorSound = 'assets/audio/error.wav';

  successSound = 'assets/audio/success.wav';

  answer!: boolean;

  mode: GameModeType;

  condition = true;

  currentWord?: string;

  active: boolean;

  isGameStarted!: boolean;

  constructor(
    private gameMode: GameModeService,
    private gameLogic: GameLogicService,
    private gameStatus: GameStatusService,
  ) {
    this.mode = this.gameMode.getGameMode();
    this.active = true;
    this.isGameStarted = this.gameStatus.getGameStatus();
  }

  ngDoCheck(): void {
    this.condition = this.mode === 'play';
    this.mode = this.gameMode.getGameMode();
    this.currentWord = this.gameLogic.getCurrentWord();
    this.isGameStarted = this.gameStatus.getGameStatus();
  }

  cardFlip(event: Event): void {
    if (this.isFlipped) return;
    event.stopPropagation();
    this.isFlipped = true;
  }

  playAudio(event: Event): void {
    event.stopPropagation();
    if (this.isSoundPlayed) return;
    this.isSoundPlayed = true;
    if (this.mode !== 'train') return;

    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.load();
    audio.play();
    setTimeout(() => {
      this.isSoundPlayed = false;
    }, AUDIO_PLAY_DELAY);
  }

  game(): void {
    if (this.mode === 'train') return;
    if (!this.isGameStarted) return;
    this.answer = this.audioSrc === this.currentWord;
    this.gameLogic.game(this, this.audioSrc);
  }

  setInactiveCard(): void {
    this.active = false;
  }

  setActiveCard(): void {
    this.active = true;
  }
}
