import { Component, DoCheck, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit, DoCheck {
  isMenuOpen: boolean = false;

  constructor(private  dialog:  MatDialog) {}

  ngOnInit(){}

  ngDoCheck() {}

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
