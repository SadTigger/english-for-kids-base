import { Component, Input, Output, DoCheck } from '@angular/core';
import { GameModeService } from 'src/app/game-mode.service';
import { typeGameMode } from 'src/app/shared/game-mode';
import { Stars } from 'src/app/shared/stars';
import { StarsService } from 'src/app/stars.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements DoCheck {
  isFlipped: boolean = false;
  isPlayed: boolean = false;
  @Input() word?: string;
  @Input() translation?: string;
  @Input() image?: string;
  @Input() audioSrc!: string;
  answer!: boolean;
  mode!: typeGameMode;
  condition: boolean = true;

  constructor(private _starsService: StarsService, private _gameMode: GameModeService) {
    this.mode = this._gameMode.getGameMode();
  }

  ngDoCheck() {
    // console.log('check');
    this.condition = this.mode === 'play';
    this.mode = this._gameMode.getGameMode();
    // console.log('check this.mode', this.mode);
  }

  cardFlip(): void {
    if (this.isFlipped) return;

    this.isFlipped = true;
  }

  playAudio(event: Event): void {
    // console.log('event.target', event.target);
    event.stopPropagation();
    if (this.isPlayed) return;
    this.isPlayed = true;
    if (this.mode !== "train") return;

    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.load();
    audio.play();
    setTimeout(() => {
      this.isPlayed = false;
    }, 1500)
  }

  game() {
    if (this.mode === "train") return;
    // console.log('this.audioSrc', this.audioSrc);
    this.answer = this.audioSrc === 'assets/audio/cry.mp3';
    // console.log('this.answer', this.answer);
    const newStar: Stars = {};
    if (!this.answer)  {
      newStar.color = 'warn';
    } else {
      newStar.class = 'gold';
    }
    this._starsService.addStar(newStar);
  }
}
