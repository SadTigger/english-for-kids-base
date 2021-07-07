import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {
  id: number = 7;
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService, private _currentCategory: CurrentCategoryService) {}

  ngOnInit() {
    this._currentCategory.setCategory(this.id);
    this.cards = this._cardsServices.getCards(this.id);
  }
}
