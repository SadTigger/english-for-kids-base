import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-a',
  templateUrl: './animal-set-a.component.html',
  styleUrls: ['./animal-set-a.component.scss'],
})
export class AnimalSetAComponent implements OnInit {
  id = 4;

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
