import { Component } from '@angular/core';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent {

  // sample room:
      // description: 'description',
      // left: {
      //   goTo: 'room',
      //   description: 'door'
      // },
      // top: {
      //   goTo: 'room',
      //   description: 'door'
      // },
      // right: {
      //   goTo: 'room',
      //   description: 'door'
      // },
      // bottom: {
      //   goTo: 'room',
      //   description: 'door'
      // }

  testGame: any = {
    entrance: {
      description: 'You are standing outside. Nothing to do here but go inside.',
      top: {
        goTo: 'firstRoom',
        description: 'door'
      },
      bottom: {
        description: 'A path going literally nowhere.'
      }
    },
    firstRoom: {
      description: 'Room 1.',
      left: {
        goTo: 'secondRoom',
        description: 'door'
      },
      top: 'TOP',
      right: {
        description: 'window'
      },
      bottom: {
        goTo: 'entrance',
        description: 'entrance'
      }
    },
    secondRoom: {
      description: 'You are now in the broom closet. Nice work.',
      right: {
        goTo: 'firstRoom',
        description: 'door'
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
