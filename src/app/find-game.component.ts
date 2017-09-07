import { FindGameState, GameFindingState } from './game-finding-state';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  // styleUrls: ['./app.component.css']
})
export class FindGameComponent {
  @Input() gameFindingState: GameFindingState;

  findGameState = FindGameState;
  gameFindingMessage = '';
  title = 'Riichi Mahjong';
  player: Player = {
    name: 'default'
  };

  constructor(private socketService: SocketService) {}

  onFindAGame() {
    if (!this.player.name) {
      this.gameFindingMessage = 'Name cannot be empty';
      return;
    }

    this.gameFindingMessage = 'Finding game...';
    this.gameFindingState.state = FindGameState.FINDING;
    this.socketService.emit('find_game', this.player.name);
  }
}

export class Player {
  name: string;
}
