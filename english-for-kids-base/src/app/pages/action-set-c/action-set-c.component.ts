import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-c',
  templateUrl: './action-set-c.component.html',
  styleUrls: ['./action-set-c.component.scss'],
})
export class ActionSetCComponent implements OnInit {
  id = 2;

  cards: CardsContent[] = [];

  constructor(
    private cardsServices: CardsService,
    private currentCategory: CurrentCategoryService,
  ) {}

  ngOnInit(): void {
    this.currentCategory.setCategory(this.id);
    this.cards = this.cardsServices.getCards(this.id);
  }
}
