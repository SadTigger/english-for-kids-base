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
    {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/banana.mp3'},
    {word: 'cherries', translation: 'вишня', image: 'assets/img/cherries.png', audioSrc: 'assets/audio/cherries.mp3'},
    {word: 'grapes', translation: 'виноград', image: 'assets/img/grapes.png', audioSrc: 'assets/audio/grapes.mp3'},
    {word: 'peach', translation: 'персик', image: 'assets/img/peach.png', audioSrc: 'assets/audio/peach.mp3'},
    {word: 'lemon', translation: 'лимон', image: 'assets/img/lemon.png', audioSrc: 'assets/audio/lemon.mp3'},
    {word: 'orange', translation: 'апельсин', image: 'assets/img/orange.png', audioSrc: 'assets/audio/orange.mp3'},
    {word: 'pear', translation: 'груша', image: 'assets/img/pear.png', audioSrc: 'assets/audio/pear.mp3'},
  ]
}
