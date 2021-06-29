import { Component } from '@angular/core';


export interface CardsContent {
  englishText: string;
  russianText: string;
  image?: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  test: string = 'test-text'
  cards: CardsContent[] = [
    {englishText: 'apple', russianText: 'яблоко'},
    {englishText: 'banana', russianText: 'банан'},
    {englishText: 'apple', russianText: 'яблоко'},
    {englishText: 'banana', russianText: 'банан'},
    {englishText: 'apple', russianText: 'яблоко'},
    {englishText: 'banana', russianText: 'банан'},
    {englishText: 'apple', russianText: 'яблоко'},
    {englishText: 'banana', russianText: 'банан'},
  ]
}
