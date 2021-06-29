import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss']
})
export class AsideMenuComponent implements OnInit {
  isMenuOpen: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSidenavClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
