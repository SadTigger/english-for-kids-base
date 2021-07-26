import { Component } from '@angular/core';
import { AsideMenuComponent } from '../aside-menu/aside-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private asideMenu: AsideMenuComponent) { }

  closeMenu(): void {
    this.asideMenu.onSidenavClick();
  }
}
