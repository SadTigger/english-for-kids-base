import { Component, OnInit, Input } from '@angular/core';
import { typeGameMode } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isFlipped: boolean = false;
  isPlayed: boolean = false;
  @Input() word?: string;
  @Input() translation?: string;
  @Input() image?: string;
  @Input() audioSrc!: string;
  mode: typeGameMode = "play";

  constructor() { }

  ngOnInit() {
  }

  cardFlip(): void {
    // this.isFlipped = !this.isFlipped
    if (this.isFlipped) return;

    this.isFlipped = true;
  }

  playAudio(event: Event): void {
    console.log('event', event);
    event.stopPropagation();
    if (this.isPlayed) return;
    this.isPlayed = true;
    if (this.mode !== "play") return;

    const audio = new Audio();
    audio.src = this.audioSrc;
    audio.load();
    audio.play();
    setTimeout(() => {
      this.isPlayed = false;
    }, 1500)
  }
}
