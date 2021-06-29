import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isFlipped: boolean = false;
  @Input() word?: string;
  @Input() translation?: string;
  @Input() image?: string;
  @Input() audioSrc?: string;

  constructor() { }

  ngOnInit() {
  }

  cardFlip(): void {
    // this.isFlipped = !this.isFlipped
    if (this.isFlipped) return;

    this.isFlipped = true;
  }
}
