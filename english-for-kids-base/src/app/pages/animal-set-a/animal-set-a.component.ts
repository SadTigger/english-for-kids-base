import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-a',
  templateUrl: './animal-set-a.component.html',
  styleUrls: ['./animal-set-a.component.scss']
})
export class AnimalSetAComponent implements OnInit {
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService) {}

  ngOnInit() {
    this.cards = this._cardsServices.getCards(4);
  }
}
