import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameStatusService {
  gameStatus: boolean = false;
  constructor() { }

  setActiveStatus() {
    this.gameStatus = true;
  }

  setInactiveStatus() {
    this.gameStatus = false;
  }

  getGameStatus() {
    return this.gameStatus;
  }
}
