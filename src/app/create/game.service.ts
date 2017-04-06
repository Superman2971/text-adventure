import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  constructor() {}

  game = {};

  setGame(game) {
    this.game = game;
  }
}
