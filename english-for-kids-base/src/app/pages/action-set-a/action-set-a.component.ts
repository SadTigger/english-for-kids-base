import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-a',
  templateUrl: './action-set-a.component.html',
  styleUrls: ['./action-set-a.component.scss']
})
export class ActionSetAComponent {
  cards: CardsContent[] = [
    {word: 'cry', translation: 'плакать', image: 'assets/img/cry.jpg', audioSrc: 'assets/audio/cry.mp3'},
    {word: 'dance', translation: 'танцевать', image: 'assets/img/dance.jpg', audioSrc: 'assets/audio/dance.mp3'},
    {word: 'dive', translation: 'нырять', image: 'assets/img/dive.jpg', audioSrc: 'assets/audio/dive.mp3'},
    {word: 'draw', translation: 'рисовать', image: 'assets/img/draw.jpg', audioSrc: 'assets/audio/draw.mp3'},
    {word: 'fish', translation: 'рыбачить', image: 'assets/img/fish.jpg', audioSrc: 'assets/audio/fish.mp3'},
    {word: 'fly', translation: 'летать', image: 'assets/img/fly.jpg', audioSrc: 'assets/audio/fly.mp3'},
    {word: 'hug', translation: 'обнимать', image: 'assets/img/hug.jpg', audioSrc: 'assets/audio/hug.mp3'},
    {word: 'jump', translation: 'прыгать', image: 'assets/img/jump.jpg', audioSrc: 'assets/audio/jump.mp3'},
  ]
}
