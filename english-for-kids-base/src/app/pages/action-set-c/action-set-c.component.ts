import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-c',
  templateUrl: './action-set-c.component.html',
  styleUrls: ['./action-set-c.component.scss']
})
export class ActionSetCComponent implements OnInit {
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(2);
  }
}
