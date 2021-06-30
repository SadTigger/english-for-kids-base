import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-a',
  templateUrl: './action-set-a.component.html',
  styleUrls: ['./action-set-a.component.scss']
})
export class ActionSetAComponent implements OnInit {
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(0);
  }
}
