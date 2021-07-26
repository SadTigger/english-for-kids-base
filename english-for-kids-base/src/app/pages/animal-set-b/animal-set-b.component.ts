import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-b',
  templateUrl: './animal-set-b.component.html',
  styleUrls: ['./animal-set-b.component.scss'],
})
export class AnimalSetBComponent implements OnInit {
  id = 5;

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
