import { FindGameState, GameFindingState } from './game-finding-state';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService],
})

export class AppComponent {
  findGameState = FindGameState;

  constructor(private socketService: SocketService) {
    socketService.init();
  }

  gameFindingState: GameFindingState = {
    state: FindGameState.INITIAL,
  };
}

export class Player {
  name: string;
}
