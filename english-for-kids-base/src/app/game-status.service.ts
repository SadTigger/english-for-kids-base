import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStatusService {
  gameStatus = false;

  setActiveStatus(): void {
    this.gameStatus = true;
  }

  setInactiveStatus(): void {
    this.gameStatus = false;
  }

  getGameStatus(): boolean {
    return this.gameStatus;
  }
}
