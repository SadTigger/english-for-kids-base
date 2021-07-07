import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameModeService } from 'src/app/game-mode.service';
import { typeGameMode } from 'src/app/shared/game-mode';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit, DoCheck {
  isMenuOpen: boolean = false;
  mode: typeGameMode;

  constructor(private  dialog:  MatDialog, private _gameMode: GameModeService) {
    this.mode = this._gameMode.getGameMode();
  }

  ngOnInit(){}

  ngDoCheck() {
    this.mode = this._gameMode.getGameMode();
  }

  onSidenavClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '812px';
    dialogConfig.height = '571px';
    this.dialog.open(LoginComponent, dialogConfig);
  }

}
