import { Injectable } from '@angular/core';
import { CARDS } from './constants/cards';
import { CardCategories } from './constants/categories';
import { CardsContent } from './shared/card-content';
import { Categories } from './shared/categories';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: CardsContent[][] = CARDS;

  categories: Categories[];

  constructor() {
    this.categories = CardCategories;
  }

  getCategories(): Categories[] {
    return this.categories;
  }

  getCards(id: number): CardsContent[] {
    return this.cards[id];
  }

  getAllCards(): CardsContent[][] {
    return this.cards;
  }
}
