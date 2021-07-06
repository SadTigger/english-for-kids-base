import { Component, DoCheck, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { GameModeService } from 'src/app/game-mode.service';
import { Categories } from 'src/app/shared/categories';
import { typeGameMode } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit, DoCheck {
  categories: Categories[] = [];
  mode: typeGameMode;

  constructor(private _cardsService: CardsService, private _gameMode: GameModeService) {
    this.mode = this._gameMode.getGameMode();
  }

  ngOnInit() {
    this.categories = this._cardsService.getCategories();
  }

  ngDoCheck() {
    this.mode = this._gameMode.getGameMode();
  }
}
