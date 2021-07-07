import { Component, OnInit } from '@angular/core';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _asideMenu: AsideMenuComponent) { }

  ngOnInit(): void {
  }

  closeMenu() {
    this._asideMenu.onSidenavClick();
  }

}
