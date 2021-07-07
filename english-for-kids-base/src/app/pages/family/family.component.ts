import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  cards: CardsContent[] = [];
  constructor(private _cardsServices: CardsService) {}

  ngOnInit(): void {
    this.cards = this._cardsServices.getCards(7);
  }

}
