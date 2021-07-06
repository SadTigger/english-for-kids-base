import { Stars } from './shared/stars';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarsService {
  stars: Stars[] = [
    {class: 'gold'},
    {color: 'warn'}
  ];

  constructor() {}

  addStar(newStar: Stars) {
    this.stars.push(newStar);
  }

  getStars() {
    return this.stars;
  }

  clearStars() {
    this.stars = [];
  }
}
