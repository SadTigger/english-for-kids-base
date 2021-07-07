import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-b',
  templateUrl: './action-set-b.component.html',
  styleUrls: ['./action-set-b.component.scss']
})
export class ActionSetBComponent  implements OnInit {
  id: number = 1;
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService, private _currentCategory: CurrentCategoryService) {}

  ngOnInit() {
    this._currentCategory.setCategory(this.id);
    this.cards = this._cardsServices.getCards(this.id);
  }
}
