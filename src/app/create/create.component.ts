import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  // SAMPLE ROOM
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
  editRoom = {};
  emptyGame = {
    gameName: '',
    gameId: (Math.random() * 100000000000),
    gameBoard: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  };

  constructor() {}

  editThisRoom(room) {
    this.showMap = false;
    this.editRoom = room
  }
}
