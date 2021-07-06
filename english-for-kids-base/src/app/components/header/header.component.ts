import { Component, Input, OnInit } from '@angular/core';
import { Stars } from 'src/app/shared/stars';
import { StarsService } from 'src/app/stars.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() answer: boolean = false;
  class = 'gold';
  color = 'warn';
  stars: Stars[] = [];
  constructor(private _starsService: StarsService) {}

  ngOnInit() {
    this.stars = this._starsService.getStars();
  }
}
