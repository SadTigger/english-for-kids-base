import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-b',
  templateUrl: './animal-set-b.component.html',
  styleUrls: ['./animal-set-b.component.scss']
})
export class AnimalSetBComponent {
  cards: CardsContent[] = [
    {word: 'bird', translation: 'птица', image: 'assets/img/bird.jpg', audioSrc: 'assets/audio/bird.mp3'},
    {word: 'fish', translation: 'рыба', image: 'assets/img/fish.jpg', audioSrc: 'assets/audio/fish.mp3'},
    {word: 'frog', translation: 'лягушка', image: 'assets/img/frog.jpg', audioSrc: 'assets/audio/frog.mp3'},
    {word: 'giraffe', translation: 'жираф', image: 'assets/img/giraffe.jpg', audioSrc: 'assets/audio/giraffe.mp3'},
    {word: 'lion', translation: 'лев', image: 'assets/img/lion.jpg', audioSrc: 'assets/audio/lion.mp3'},
    {word: 'mouse', translation: 'мышь', image: 'assets/img/mouse.jpg', audioSrc: 'assets/audio/mouse.mp3'},
    {word: 'turtle', translation: 'черепаха', image: 'assets/img/turtle.jpg', audioSrc: 'assets/audio/turtle.mp3'},
    {word: 'dolphin', translation: 'дельфин', image: 'assets/img/dolphin.jpg', audioSrc: 'assets/audio/dolphin.mp3'},
  ]
}
