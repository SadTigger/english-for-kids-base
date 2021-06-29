import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-action-set-c',
  templateUrl: './action-set-c.component.html',
  styleUrls: ['./action-set-c.component.scss']
})
export class ActionSetCComponent {
  cards: CardsContent[] = [
    {word: 'argue', translation: 'спорить', image: 'assets/img/argue.jpg', audioSrc: 'assets/audio/argue.mp3'},
    {word: 'build', translation: 'строить', image: 'assets/img/build.jpg', audioSrc: 'assets/audio/build.mp3'},
    {word: 'carry', translation: 'нести', image: 'assets/img/carry.jpg', audioSrc: 'assets/audio/carry.mp3'},
    {word: 'catch', translation: 'ловить', image: 'assets/img/catch.jpg', audioSrc: 'assets/audio/catch.mp3'},
    {word: 'drive', translation: 'водить', image: 'assets/img/drive.jpg', audioSrc: 'assets/audio/drive.mp3'},
    {word: 'drop', translation: 'падать', image: 'assets/img/drop.jpg', audioSrc: 'assets/audio/drop.mp3'},
    {word: 'pull', translation: 'тянуть', image: 'assets/img/pull.jpg', audioSrc: 'assets/audio/pull.mp3'},
    {word: 'push', translation: 'толкать', image: 'assets/img/push.jpg', audioSrc: 'assets/audio/push.mp3'},
  ]
}
