import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  // SAMPLE GAME/ROOM OBJECT
  // description: 'description',
  // image: '',
  // character: {
  //   name: '',
  //   health: 10,
  //   inventory: {
  //     key1: true,
  //     key2: false,
  //     weapon1: true,
  //     itemName: true
  //   }
  // }
  // west: {
  //   goTo: 'room',
  //   label: 'door',
  //   monster: {
  //     name: '',
  //     damage: 2,
  //     speed: 0.5,
  //     health: '',
  //     fightSpeech: '',
  //     deathSpeech: ''
  //   },
  //   actions: {
  //     buttons: [{
  //       requiredItem: '', // for use to disable button unless they have an item
  //       // don't neglect to add a hover info to describe what item is needed
  //       label: '',
  //       clicked: {
  //         goTo: '', // for use with run or leave
  //         addToInventory: '', // for use with Take Item of whatever name
  //         initFight: true // for use to start monster fights
  //       }
  //     }]
  //   },
  //   input: { // input text box with a question
  //     questions: '',
  //     answer: '',
  //     incorrectResponses: [''],
  //     resolve: {
  //       goTo: '',
  //       addToInventory: ''
  //     }
  //   }
  // },
  // north: {
  //   goTo: 'room',
  //   label: 'door'
  // },
  // east: {
  //   label: 'door',
  //   description: 'added text to showcase at a dead end with no goTo'
  // },
  // south: {
  //   goTo: 'room',
  //   label: 'door'
  // }

  showMap = true;
  editRoom: any;
  game:any;

  constructor(private GameService:GameService) {}

  editThisRoom(room) {
    this.showMap = false;
    this.editRoom = room;
    if (!this.editRoom.west) {
      this.editRoom.west = {};
      this.editRoom.north = {};
      this.editRoom.east = {};
      this.editRoom.south = {};
    }
  }

  saveMap() {
    this.showMap = true;
    this.GameService.setGame(this.game);
  }

  ngOnInit() {
    if (this.GameService.game) {
      this.game = this.GameService.game;
    } else {
      this.game = this.GameService.emptyGame;
    }
  }
}
