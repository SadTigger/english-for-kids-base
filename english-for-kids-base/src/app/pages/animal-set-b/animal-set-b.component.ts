import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-b',
  templateUrl: './animal-set-b.component.html',
  styleUrls: ['./animal-set-b.component.scss']
})
export class AnimalSetBComponent implements OnInit {
  id: number = 5;
  cards: CardsContent[] = [];

  constructor(private _cardsServices: CardsService, private _currentCategory: CurrentCategoryService) {}

  ngOnInit() {
    this._currentCategory.setCategory(this.id);
    this.cards = this._cardsServices.getCards(this.id);
  }
}
