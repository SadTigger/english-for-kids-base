import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {
  cards: CardsContent[] = [];
  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(6);
  }
}
