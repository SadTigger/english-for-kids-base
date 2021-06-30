import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-b',
  templateUrl: './animal-set-b.component.html',
  styleUrls: ['./animal-set-b.component.scss']
})
export class AnimalSetBComponent implements OnInit {
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(5);
  }
}
