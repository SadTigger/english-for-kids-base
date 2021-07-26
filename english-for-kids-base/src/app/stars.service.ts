import { Injectable } from '@angular/core';
import { Stars } from './shared/stars';

@Injectable({
  providedIn: 'root',
})
export class StarsService {
  stars: Stars[] = [
    { class: 'gold' },
    { color: 'warn' },
  ];

  addStar(newStar: Stars): void {
    this.stars.push(newStar);
  }

  getStars(): Stars[] {
    return this.stars;
  }

  clearStars(): void {
    this.stars = [];
  }
}
