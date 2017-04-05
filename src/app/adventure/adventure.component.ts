import { Component } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {

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

  testGame: any = {
    entrance: {
      description: 'You are standing outside. Nothing to do here but go inside.',
      north: {
        goTo: 'firstRoom',
        label: 'door'
      },
      south: {
        label: 'A path going literally nowhere.'
      }
    },
    firstRoom: {
      description: 'Room 1.',
      west: {
        goTo: 'secondRoom',
        label: 'door'
      },
      north: 'north',
      east: {
        label: 'window',
        description: 'You look outside and see a beautiful mountain side.'
      },
      south: {
        goTo: 'entrance',
        label: 'entrance'
      }
    },
    secondRoom: {
      description: 'You are now in the broom closet. Nice work.',
      east: {
        goTo: 'firstRoom',
        label: 'door'
      }
    }
  };
  previousRoom: any = {};
  currentRoom: any = this.testGame.firstRoom;

  constructor() {}

  goBack() {
    this.currentRoom = this.previousRoom;
  }

  testing(nextRoom) {
    if (nextRoom.goTo) {
      this.currentRoom = this.testGame[nextRoom.goTo];
    } else if (nextRoom.description) {
      alert(nextRoom.description);
    }
  }
}
