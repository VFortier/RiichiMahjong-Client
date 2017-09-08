import { FindGameState, GameFindingState } from './game-finding-state';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SocketService],
})

export class AppComponent implements OnInit {
  findGameState = FindGameState;
  game = null;

  gameFindingState: GameFindingState = {
    state: FindGameState.INITIAL,
  };

  constructor(private socketService: SocketService) {
    socketService.init();
  }

  ngOnInit() {
    console.log('Init AppComponent');
    this.socketService.on('game_found', (game) => {
      this.game = game;
      this.gameFindingState.state = FindGameState.FOUND;
    });
  }
}
