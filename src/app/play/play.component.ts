import { Component } from '@angular/core';
import { GameService } from '../create/game.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  constructor(private GameService:GameService) {}

  game = this.GameService.game;
}
