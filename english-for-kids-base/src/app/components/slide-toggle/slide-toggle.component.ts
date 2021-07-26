import { Component, DoCheck, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { GameModeService } from 'src/app/game-mode.service';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.scss'],
})

export class SlideToggleComponent implements OnInit, DoCheck {
  isChecked?: boolean = false;

  mode!: string;

  constructor(private gameMode: GameModeService) {}

  ngOnInit(): void {
    this.mode = this.gameMode.getGameMode();
    this.isChecked = this.mode !== 'train';
  }

  ngDoCheck(): void {
    this.mode = this.gameMode.getGameMode();
    this.isChecked = this.mode !== 'train';
  }

  toggleMode(event: MatSlideToggleChange): void {
    this.isChecked = event.checked;
    this.gameMode.toggleGameMode();
  }
}

// used https://stackoverflow.com/questions/55724398/change-slide-toggle-text-on-toggle-change
