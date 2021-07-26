import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WORD_REPEAT_DELAY, CHECK_ANSWER_DELAY } from 'src/app/constants/delay';
import { CurrentCategoryService } from 'src/app/current-category.service';
import { GameLogicService } from 'src/app/game-logic.service';
import { GameModeService } from 'src/app/game-mode.service';
import { GameStatusService } from 'src/app/game-status.service';
import { GameModeType } from 'src/app/shared/game-mode';

@Component({
  selector: 'app-game-controls',
  templateUrl: './game-controls.component.html',
  styleUrls: ['./game-controls.component.scss'],
})
export class GameControlsComponent implements OnInit, DoCheck {
  mode!: GameModeType;

  audio!: string[];

  currentWord?: string;

  currentRoute: string;

  condition = true;

  isStarted?: boolean;

  wordAudio: HTMLAudioElement;

  answer = false;

  alreadySaid = false;

  categoryId: number;

  constructor(
    private gameMode: GameModeService,
    private gameLogic: GameLogicService,
    private gameStatus: GameStatusService,
    private currentCategory: CurrentCategoryService,
    private router: Router,
  ) {
    this.currentRoute = this.router.url;
    this.wordAudio = new Audio();
    this.categoryId = this.currentCategory.getCurrentCategory();
  }

  ngOnInit(): void {
    this.mode = this.gameMode.getGameMode();
    this.audio = this.gameLogic.getAudioSrc(this.categoryId);
    this.isStarted = this.gameStatus.getGameStatus();
  }

  ngDoCheck(): void {
    this.mode = this.gameMode.getGameMode();
    this.currentRoute = this.router.url;
    this.condition = this.currentRoute !== '/main';
    this.isStarted = this.gameStatus.getGameStatus();
  }

  async startGame(): Promise<void> {
    this.gameLogic.activateCards();
    this.gameStatus.setActiveStatus();
    [this.currentWord] = this.audio;
    if (this.audio.length !== 0) {
      if (this.currentWord) {
        if (!this.alreadySaid) {
          this.wordAudio.src = this.currentWord;
          setTimeout(() => {
            this.wordAudio.load();
            this.wordAudio.play();
            this.alreadySaid = true;
          }, CHECK_ANSWER_DELAY);
        }
        this.gameLogic.setCurrentWord(this.currentWord);
        setTimeout(async () => {
          this.answer = await this.gameLogic.isRightWord();
          if (this.answer) {
            this.alreadySaid = false;
            this.audio.shift();
          }
          this.startGame();
        }, CHECK_ANSWER_DELAY);
      }
    } else {
      // console.log('Congratulation!!!');
      this.gameStatus.setInactiveStatus();
    }
  }

  repeatWord(): void {
    if (this.currentWord && this.wordAudio.src) {
      setTimeout(() => {
        this.wordAudio.load();
        this.wordAudio.play();
      }, WORD_REPEAT_DELAY);
    }
  }
}
