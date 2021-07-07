import { Component, Input, Output, DoCheck } from '@angular/core';
import { GameLogicService } from 'src/app/game-logic.service';
import { GameModeService } from 'src/app/game-mode.service';
import { GameStatusService } from 'src/app/game-status.service';
import { typeGameMode } from 'src/app/shared/game-mode';
import { GameControlsComponent } from '../game-controls/game-controls.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements DoCheck {
  isFlipped: boolean = false;
  isSoundPlayed: boolean = false;
  @Input() word?: string;
  @Input() translation?: string;
  @Input() image?: string;
  @Input() audioSrc!: string;
  @Input() id?: number;
  errorSound: string = 'assets/audio/error.wav'
  successSound: string = 'assets/audio/success.wav'
  answer!: boolean;
  mode: typeGameMode;
  condition: boolean = true;
  currentWord?: string;
  active: boolean;
  isGameStarted!: boolean;

  constructor(private _gameMode: GameModeService, private _gameLogic: GameLogicService, private _gameStatus: GameStatusService) {
    this.mode = this._gameMode.getGameMode();
    this.active = true;
    this.isGameStarted = this._gameStatus.getGameStatus();
  }

  ngDoCheck() {
    this.condition = this.mode === 'play';
    this.mode = this._gameMode.getGameMode();
    this.currentWord = this._gameLogic.getCurrentWord();
    this.isGameStarted = this._gameStatus.getGameStatus();
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
    if (this.mode !== "train") return;

    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.load();
    audio.play();
    setTimeout(() => {
      this.isSoundPlayed = false;
    }, 1500)
  }

  game() {
    if (this.mode === "train") return;
    if (!this.isGameStarted) return;
    this.answer = this.audioSrc === this.currentWord ;
    this._gameLogic.game(this, this.audioSrc);
  }

  setInactiveCard() {
    this.active = false;
  }

  setActiveCard() {
    this.active = true;
  }
}
