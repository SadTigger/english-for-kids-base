import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent {
  cards: CardsContent[] = [
    {word: 'apple', translation: 'яблоко', image: 'assets/images/apple.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'apple', translation: 'яблоко', image: 'assets/images/apple.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'apple', translation: 'яблоко', image: 'assets/images/apple.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'apple', translation: 'яблоко', image: 'assets/images/apple.png', audioSrc: 'assets/audio/angry.mp3'},
    {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/angry.mp3'},
  ]
}
