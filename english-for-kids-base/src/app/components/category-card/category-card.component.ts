import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() name?: string;

  @Input() image?: string;

  @Input() link?: string;

  @Input() background!: string;
}
