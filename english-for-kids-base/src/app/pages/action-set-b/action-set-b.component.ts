import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-b',
  templateUrl: './action-set-b.component.html',
  styleUrls: ['./action-set-b.component.scss']
})
export class ActionSetBComponent {
  cards: CardsContent[] = [
    {word: 'open', translation: 'открывать', image: 'assets/img/open.jpg', audioSrc: 'assets/audio/open.mp3'},
    {word: 'play', translation: 'играть', image: 'assets/img/play.jpg', audioSrc: 'assets/audio/play.mp3'},
    {word: 'point', translation: 'указывать', image: 'assets/img/point.jpg', audioSrc: 'assets/audio/point.mp3'},
    {word: 'ride', translation: 'кататься', image: 'assets/img/ride.jpg', audioSrc: 'assets/audio/ride.mp3'},
    {word: 'run', translation: 'бегать', image: 'assets/img/run.jpg', audioSrc: 'assets/audio/run.mp3'},
    {word: 'sing', translation: 'петь', image: 'assets/img/sing.jpg', audioSrc: 'assets/audio/sing.mp3'},
    {word: 'skip', translation: 'пропускать', image: 'assets/img/skip.jpg', audioSrc: 'assets/audio/skip.mp3'},
    {word: 'swim', translation: 'плавать', image: 'assets/img/swim.jpg', audioSrc: 'assets/audio/swim.mp3'},
  ]
}
