import { Injectable } from '@angular/core';
import { CardsContent } from './shared/card-content';
import { Categories } from './shared/categories';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: CardsContent[][] = [
    [
      {word: 'cry', translation: 'плакать', image: 'assets/img/cry.jpg', audioSrc: 'assets/audio/cry.mp3'},
      {word: 'dance', translation: 'танцевать', image: 'assets/img/dance.jpg', audioSrc: 'assets/audio/dance.mp3'},
      {word: 'dive', translation: 'нырять', image: 'assets/img/dive.jpg', audioSrc: 'assets/audio/dive.mp3'},
      {word: 'draw', translation: 'рисовать', image: 'assets/img/draw.jpg', audioSrc: 'assets/audio/draw.mp3'},
      {word: 'fish', translation: 'рыбачить', image: 'assets/img/fish.jpg', audioSrc: 'assets/audio/fish.mp3'},
      {word: 'fly', translation: 'летать', image: 'assets/img/fly.jpg', audioSrc: 'assets/audio/fly.mp3'},
      {word: 'hug', translation: 'обнимать', image: 'assets/img/hug.jpg', audioSrc: 'assets/audio/hug.mp3'},
      {word: 'jump', translation: 'прыгать', image: 'assets/img/jump.jpg', audioSrc: 'assets/audio/jump.mp3'},
    ],
    [
      {word: 'open', translation: 'открывать', image: 'assets/img/open.jpg', audioSrc: 'assets/audio/open.mp3'},
      {word: 'play', translation: 'играть', image: 'assets/img/play.jpg', audioSrc: 'assets/audio/play.mp3'},
      {word: 'point', translation: 'указывать', image: 'assets/img/point.jpg', audioSrc: 'assets/audio/point.mp3'},
      {word: 'ride', translation: 'кататься', image: 'assets/img/ride.jpg', audioSrc: 'assets/audio/ride.mp3'},
      {word: 'run', translation: 'бегать', image: 'assets/img/run.jpg', audioSrc: 'assets/audio/run.mp3'},
      {word: 'sing', translation: 'петь', image: 'assets/img/sing.jpg', audioSrc: 'assets/audio/sing.mp3'},
      {word: 'skip', translation: 'пропускать', image: 'assets/img/skip.jpg', audioSrc: 'assets/audio/skip.mp3'},
      {word: 'swim', translation: 'плавать', image: 'assets/img/swim.jpg', audioSrc: 'assets/audio/swim.mp3'},
    ],
    [
      {word: 'argue', translation: 'спорить', image: 'assets/img/argue.jpg', audioSrc: 'assets/audio/argue.mp3'},
      {word: 'build', translation: 'строить', image: 'assets/img/build.jpg', audioSrc: 'assets/audio/build.mp3'},
      {word: 'carry', translation: 'нести', image: 'assets/img/carry.jpg', audioSrc: 'assets/audio/carry.mp3'},
      {word: 'catch', translation: 'ловить', image: 'assets/img/catch.jpg', audioSrc: 'assets/audio/catch.mp3'},
      {word: 'drive', translation: 'водить', image: 'assets/img/drive.jpg', audioSrc: 'assets/audio/drive.mp3'},
      {word: 'drop', translation: 'падать', image: 'assets/img/drop.jpg', audioSrc: 'assets/audio/drop.mp3'},
      {word: 'pull', translation: 'тянуть', image: 'assets/img/pull.jpg', audioSrc: 'assets/audio/pull.mp3'},
      {word: 'push', translation: 'толкать', image: 'assets/img/push.jpg', audioSrc: 'assets/audio/push.mp3'},
    ],
    [
      {word: 'big', translation: 'большой', image: 'assets/img/big.jpg', audioSrc: 'assets/audio/big.mp3'},
      {word: 'small', translation: 'маленький', image: 'assets/img/small.jpg', audioSrc: 'assets/audio/small.mp3'},
      {word: 'fast', translation: 'быстрый', image: 'assets/img/fast.jpg', audioSrc: 'assets/audio/fast.mp3'},
      {word: 'slow', translation: 'медленный', image: 'assets/img/slow.jpg', audioSrc: 'assets/audio/slow.mp3'},
      {word: 'friendly', translation: 'дружелюбный', image: 'assets/img/friendly.jpg', audioSrc: 'assets/audio/friendly.mp3'},
      {word: 'unfriendly', translation: 'недружелюбный', image: 'assets/img/unfriendly.jpg', audioSrc: 'assets/audio/unfriendly.mp3'},
      {word: 'young', translation: 'молодой', image: 'assets/img/young.jpg', audioSrc: 'assets/audio/young.mp3'},
      {word: 'old', translation: 'старый', image: 'assets/img/old.jpg', audioSrc: 'assets/audio/old.mp3'},
    ],
    [
      {word: 'cat', translation: 'кот', image: 'assets/img/cat.jpg', audioSrc: 'assets/audio/cat.mp3'},
      {word: 'chick', translation: 'цыплёнок', image: 'assets/img/chick.jpg', audioSrc: 'assets/audio/chick.mp3'},
      {word: 'chicken', translation: 'курица', image: 'assets/img/chicken.jpg', audioSrc: 'assets/audio/chicken.mp3'},
      {word: 'dog', translation: 'собака', image: 'assets/img/dog.jpg', audioSrc: 'assets/audio/dog.mp3'},
      {word: 'horse', translation: 'лошадь', image: 'assets/img/horse.jpg', audioSrc: 'assets/audio/horse.mp3'},
      {word: 'pig', translation: 'свинья', image: 'assets/img/pig.jpg', audioSrc: 'assets/audio/pig.mp3'},
      {word: 'rabbit', translation: 'кролик', image: 'assets/img/rabbit.jpg', audioSrc: 'assets/audio/rabbit.mp3'},
      {word: 'sheep', translation: 'овечка', image: 'assets/img/sheep.jpg', audioSrc: 'assets/audio/sheep.mp3'},
    ],
    [
      {word: 'bird', translation: 'птица', image: 'assets/img/bird.jpg', audioSrc: 'assets/audio/bird.mp3'},
      {word: 'fish', translation: 'рыба', image: 'assets/img/fish.jpg', audioSrc: 'assets/audio/fish.mp3'},
      {word: 'frog', translation: 'лягушка', image: 'assets/img/frog.jpg', audioSrc: 'assets/audio/frog.mp3'},
      {word: 'giraffe', translation: 'жираф', image: 'assets/img/giraffe.jpg', audioSrc: 'assets/audio/giraffe.mp3'},
      {word: 'lion', translation: 'лев', image: 'assets/img/lion.jpg', audioSrc: 'assets/audio/lion.mp3'},
      {word: 'mouse', translation: 'мышь', image: 'assets/img/mouse.jpg', audioSrc: 'assets/audio/mouse.mp3'},
      {word: 'turtle', translation: 'черепаха', image: 'assets/img/turtle.jpg', audioSrc: 'assets/audio/turtle.mp3'},
      {word: 'dolphin', translation: 'дельфин', image: 'assets/img/dolphin.jpg', audioSrc: 'assets/audio/dolphin.mp3'},
    ],
    [
      {word: 'apple', translation: 'яблоко', image: 'assets/images/apple.png', audioSrc: 'assets/audio/angry.mp3'},
      {word: 'banana', translation: 'банан', image: 'assets/images/banana.png', audioSrc: 'assets/audio/banana.mp3'},
      {word: 'cherries', translation: 'вишня', image: 'assets/img/cherries.png', audioSrc: 'assets/audio/cherries.mp3'},
      {word: 'grapes', translation: 'виноград', image: 'assets/img/grapes.png', audioSrc: 'assets/audio/grapes.mp3'},
      {word: 'peach', translation: 'персик', image: 'assets/img/peach.png', audioSrc: 'assets/audio/peach.mp3'},
      {word: 'lemon', translation: 'лимон', image: 'assets/img/lemon.png', audioSrc: 'assets/audio/lemon.mp3'},
      {word: 'orange', translation: 'апельсин', image: 'assets/img/orange.png', audioSrc: 'assets/audio/orange.mp3'},
      {word: 'pear', translation: 'груша', image: 'assets/img/pear.png', audioSrc: 'assets/audio/pear.mp3'},
    ],
  ]

  constructor() { }

  getCategories(): Categories[] {
    return [
      {id: 0, name: "Action (set A)", link: "/action-set-a", image: "assets/img/cry.jpg"},
      {id: 1, name: "Action (set B)", link: "/action-set-b", image: "assets/img/open.jpg"},
      {id: 2, name: "Action (set C)", link: "/action-set-c", image: "assets/img/argue.jpg"},
      {id: 3, name: "Adjective", link: "/adjective", image: "assets/img/big.jpg"},
      {id: 4, name: "Animals (set A)", link: "/animal-set-a", image: "assets/img/cat.jpg"},
      {id: 5, name: "Animals (set B)", link: "/animal-set-a", image: "assets/img/bird.jpg"},
      {id: 6, name: "Family members", link: "/family", image: "assets/img/cat.jpg"},
      {id: 7, name: "Toys", link: "/toys", image: "assets/img/cat.jpg"},
      {id: 8, name: "Fruits", link: "/fruits", image: "assets/images/apple.png"}
    ]
  }

  getCards(id: number) {
    return this.cards[id];
  }

  getAllCards() {
    return this.cards;
  }
}
