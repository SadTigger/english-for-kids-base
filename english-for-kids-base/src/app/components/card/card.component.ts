import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  isFlipped: boolean = true;
  @Input() englishText?: string;
  @Input() russianText?: string;
  @Input() image?: string;

  constructor() { }

  ngOnInit() {
  }

  cardFlip(): void {
    this.isFlipped = !this.isFlipped
  }
}
