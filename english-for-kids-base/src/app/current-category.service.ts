import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentCategoryService {
  currentCategory!: number;
  constructor() { }

  setCategory(value: number) {
    this.currentCategory = value;
  }

  getCurrentCategory(): number {
    return this.currentCategory;
  }
}
