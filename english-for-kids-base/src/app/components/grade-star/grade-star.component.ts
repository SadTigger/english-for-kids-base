import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grade-star',
  templateUrl: './grade-star.component.html',
  styleUrls: ['./grade-star.component.scss'],
})
export class GradeStarComponent {
  @Input() gradeClass?: string;

  @Input() gradeColor?: string;
}
