import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  constructor() {}

  emptyGame = {
    gameName: '',
    gameId: (Math.random() * 100000000000000),
    gameBoard: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  };

  game;

  setGame(game) {
    this.game = game;
  }
}
