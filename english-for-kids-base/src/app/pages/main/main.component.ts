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
  cards: CardsContent[] = [
    {englishText: 'apple', russianText: 'яблоко', image: 'assets/images/apple.png'},
    {englishText: 'banana', russianText: 'банан', image: 'assets/images/banana.png'},
    {englishText: 'apple', russianText: 'яблоко', image: 'assets/images/apple.png'},
    {englishText: 'banana', russianText: 'банан', image: 'assets/images/banana.png'},
    {englishText: 'apple', russianText: 'яблоко', image: 'assets/images/apple.png'},
    {englishText: 'banana', russianText: 'банан', image: 'assets/images/banana.png'},
    {englishText: 'apple', russianText: 'яблоко', image: 'assets/images/apple.png'},
    {englishText: 'banana', russianText: 'банан', image: 'assets/images/banana.png'},
  ]
}
