import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-animal-set-a',
  templateUrl: './animal-set-a.component.html',
  styleUrls: ['./animal-set-a.component.scss']
})
export class AnimalSetAComponent {
  cards: CardsContent[] = [
    {word: 'cat', translation: 'спорить', image: 'assets/img/cat.jpg', audioSrc: 'assets/audio/cat.mp3'},
    {word: 'chick', translation: 'строить', image: 'assets/img/chick.jpg', audioSrc: 'assets/audio/chick.mp3'},
    {word: 'chicken', translation: 'нести', image: 'assets/img/chicken.jpg', audioSrc: 'assets/audio/chicken.mp3'},
    {word: 'dog', translation: 'ловить', image: 'assets/img/dog.jpg', audioSrc: 'assets/audio/dog.mp3'},
    {word: 'horse', translation: 'водить', image: 'assets/img/horse.jpg', audioSrc: 'assets/audio/horse.mp3'},
    {word: 'pig', translation: 'падать', image: 'assets/img/pig.jpg', audioSrc: 'assets/audio/pig.mp3'},
    {word: 'rabbit', translation: 'тянуть', image: 'assets/img/rabbit.jpg', audioSrc: 'assets/audio/rabbit.mp3'},
    {word: 'sheep', translation: 'толкать', image: 'assets/img/sheep.jpg', audioSrc: 'assets/audio/sheep.mp3'},
  ]
}
