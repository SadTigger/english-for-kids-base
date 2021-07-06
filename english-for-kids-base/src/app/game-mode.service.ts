import { Injectable } from '@angular/core';
import { typeGameMode } from './shared/game-mode';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {
  gameMode: typeGameMode = 'train';
  constructor() { }

  toggleGameMode() {
    this.gameMode = this.gameMode === 'train' ?  'play' : 'train';
  }

  getGameMode() {
    return this.gameMode;
  }
}
