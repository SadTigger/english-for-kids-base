import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { GameLogicService } from 'src/app/game-logic.service';
import { GameModeService } from 'src/app/game-mode.service';
import { GameStatusService } from 'src/app/game-status.service';
import { typeGameMode } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss']
})
export class GameControlsComponent implements OnInit, DoCheck {
  gameMode!: typeGameMode;
  audio!: string[];
  currentWord?: string;
  currentRoute: string;
  condition: boolean = true;
  isStarted?: boolean;
  wordAudio: HTMLAudioElement;
  answer: boolean = false;
  alreadySaid: boolean = false;
  categoryId: number;
  constructor(
    private _gameMode: GameModeService,
    private _gameLogic: GameLogicService,
    private _gameStatus: GameStatusService,
    private _currentCategory: CurrentCategoryService,
    private router: Router
  ) {
    this.currentRoute = this.router.url;
    this.wordAudio = new Audio();
    this.categoryId = this._currentCategory.getCurrentCategory();
  }

  ngOnInit(): void {
    this.gameMode = this._gameMode.getGameMode();
    this.audio = this._gameLogic.getAudioSrc(this.categoryId);
    this.isStarted = this._gameStatus.getGameStatus();
  }

  ngDoCheck() {
    this.gameMode = this._gameMode.getGameMode();
    this.currentRoute = this.router.url;
    this.condition = this.currentRoute !== '/main';
    this.isStarted = this._gameStatus.getGameStatus();
  }

  async startGame() {
    this._gameLogic.activateCards();
    this._gameStatus.setActiveStatus();
    this.currentWord = this.audio[0];
    if (this.audio.length !== 0) {
      if (this.currentWord) {
        if (!this.alreadySaid) {
          this.wordAudio.src = this.currentWord;
          setTimeout(() => {
            this.wordAudio.load();
            this.wordAudio.play();
            this.alreadySaid = true;
          }, 1000)
        }
        this._gameLogic.setCurrentWord(this.currentWord);
        setTimeout(async () => {
          this.answer = await this._gameLogic.isRightWord();
          if (this.answer) {
            this.alreadySaid = false;
            this.audio.shift();
          }
          this.startGame();
        }, 1000);
      }
    } else {
      console.log('Congratulation!!!');
      this._gameStatus.setInactiveStatus();
    }
  }

  repeatWord() {
    if (this.currentWord && this.wordAudio.src) {
      setTimeout(() => {
        this.wordAudio.load();
        this.wordAudio.play();
      }, 500)
    }
  }

}
