import { Component, DoCheck, OnInit } from '@angular/core';
import { CardsService } from 'src/app/cards.service';
import { GameModeService } from 'src/app/game-mode.service';
import { Categories } from 'src/app/shared/categories';
import { GameModeType } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})

export class MainComponent implements OnInit, DoCheck {
  categories: Categories[] = [];

  mode: GameModeType;

  constructor(private cardsService: CardsService, private gameMode: GameModeService) {
    this.mode = this.gameMode.getGameMode();
  }

  ngOnInit(): void {
    this.categories = this.cardsService.getCategories();
  }

  ngDoCheck(): void {
    this.mode = this.gameMode.getGameMode();
  }
}
