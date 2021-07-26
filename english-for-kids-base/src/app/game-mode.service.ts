import { Injectable } from '@angular/core';
import { GameModeType } from './shared/game-mode';

@Injectable({
  providedIn: 'root',
})
export class GameModeService {
  gameMode: GameModeType = 'train';

  toggleGameMode(): void {
    this.gameMode = this.gameMode === 'train' ? 'play' : 'train';
  }

  getGameMode(): GameModeType {
    return this.gameMode;
  }
}
