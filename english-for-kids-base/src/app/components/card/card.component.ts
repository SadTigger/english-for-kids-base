import { Component, Input, Output, DoCheck } from '@angular/core';
import { GameLogicService } from 'src/app/game-logic.service';
import { GameModeService } from 'src/app/game-mode.service';
import { typeGameMode } from 'src/app/shared/game-mode';

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
  errorSound: string = 'assets/audio/error.wav'
  successSound: string = 'assets/audio/success.wav'
  answer!: boolean;
  mode!: typeGameMode;
  condition: boolean = true;
  currentWord?: string;
  active: boolean;

  constructor(private _gameMode: GameModeService, private _gameLogic: GameLogicService) {
    this.mode = this._gameMode.getGameMode();
    this.active = true;
  }

  ngDoCheck() {
    this.condition = this.mode === 'play';
    this.mode = this._gameMode.getGameMode();
    this.currentWord = this._gameLogic.getCurrentWord();
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
    console.log('this card is: ', this);
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
