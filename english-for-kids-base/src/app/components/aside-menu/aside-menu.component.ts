import { Component, DoCheck } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GameModeService } from 'src/app/game-mode.service';
import { GameModeType } from 'src/app/shared/game-mode';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements DoCheck {
  isMenuOpen = false;

  mode: GameModeType;

  constructor(private dialog: MatDialog, private gameMode: GameModeService) {
    this.mode = this.gameMode.getGameMode();
  }

  ngDoCheck(): void {
    this.mode = this.gameMode.getGameMode();
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
