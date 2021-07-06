import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-star',
  templateUrl: './grade-star.component.html',
  styleUrls: ['./grade-star.component.scss']
})
export class GradeStarComponent implements OnInit {
  @Input() gradeClass?: string;
  @Input() gradeColor?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
