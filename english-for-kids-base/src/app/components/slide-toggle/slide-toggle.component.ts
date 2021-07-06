import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { GameModeService } from 'src/app/game-mode.service';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss']
})

export class SlideToggleComponent implements OnInit {
  isChecked?: boolean = false;
  mode!: string;
  constructor(private _gameMode: GameModeService) {}
  ngOnInit() {
    this.mode = this._gameMode.getGameMode();
  }

  toggleMode(event: MatSlideToggleChange) {
    // console.log('this.mode', this.mode);
    // console.log('this.isChecked', this.isChecked);
    this.isChecked = event.checked;
    this._gameMode.toggleGameMode();
    this.mode = this._gameMode.getGameMode();
  }
}

// used https://stackoverflow.com/questions/55724398/change-slide-toggle-text-on-toggle-change
