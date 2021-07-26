import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentCategoryService {
  currentCategory!: number;

  setCategory(value: number): void {
    this.currentCategory = value;
  }

  getCurrentCategory(): number {
    return this.currentCategory;
  }
}
