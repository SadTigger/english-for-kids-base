import { Component, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { Categories } from 'src/app/shared/categories';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  categories: Categories[] = [];

  constructor(private _cardsService: CardsService) {}

  ngOnInit() {
    this.categories = this._cardsService.getCategories();
  }
}
