import { Component } from '@angular/core';
import { CardsContent } from 'src/app/shared/card-content';

@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.component.html',
  styleUrls: ['./adjective.component.scss']
})
export class AdjectiveComponent {
  cards: CardsContent[] = [
    {word: 'big', translation: 'большой', image: 'assets/img/big.jpg', audioSrc: 'assets/audio/big.mp3'},
    {word: 'small', translation: 'маленький', image: 'assets/img/small.jpg', audioSrc: 'assets/audio/small.mp3'},
    {word: 'fast', translation: 'быстрый', image: 'assets/img/fast.jpg', audioSrc: 'assets/audio/fast.mp3'},
    {word: 'slow', translation: 'медленный', image: 'assets/img/slow.jpg', audioSrc: 'assets/audio/slow.mp3'},
    {word: 'friendly', translation: 'дружелюбный', image: 'assets/img/friendly.jpg', audioSrc: 'assets/audio/friendly.mp3'},
    {word: 'unfriendly', translation: 'недружелюбный', image: 'assets/img/unfriendly.jpg', audioSrc: 'assets/audio/unfriendly.mp3'},
    {word: 'young', translation: 'молодой', image: 'assets/img/young.jpg', audioSrc: 'assets/audio/young.mp3'},
    {word: 'old', translation: 'старый', image: 'assets/img/old.jpg', audioSrc: 'assets/audio/old.mp3'},
  ]
}
