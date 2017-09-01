import { Player } from './app.component';
import { FindGameState, GameFindingState } from './game-finding-state';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  // styleUrls: ['./app.component.css']
})
export class FindGameComponent implements OnInit {
  @Input() gameFindingState: GameFindingState;

  findGameState = FindGameState;
  gameFindingMessage = '';
  title = 'Riichi Mahjong';
  player: Player = {
    name: ''
  };

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.on('game_found', (data) => {
      this.gameFindingState.state = FindGameState.FOUND;
    });
  }

  onFindAGame() {
    this.gameFindingMessage = 'Finding game...';
    this.gameFindingState.state = FindGameState.FINDING;
    this.socketService.emit('find_game', { name: this.player.name });
  }
}
