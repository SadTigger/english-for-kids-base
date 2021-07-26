import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss'],
})
export class FruitsComponent implements OnInit {
  id = 6;

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
