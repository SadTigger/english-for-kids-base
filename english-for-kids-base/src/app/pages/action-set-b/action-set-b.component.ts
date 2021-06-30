import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-b',
  templateUrl: './action-set-b.component.html',
  styleUrls: ['./action-set-b.component.scss']
})
export class ActionSetBComponent  implements OnInit {
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(1);
  }
}
