import { IsInGame, Player } from './app.component';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  // styleUrls: ['./app.component.css']
})
export class FindGameComponent implements OnInit {
  @Input() isInGame: IsInGame;

  title = 'Riichi Mahjong';
  player: Player = {
    name: ''
  };

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.on('game_found', (data) => {
      this.isInGame.value = true;
    });
  }

  onFindAGame() {
    this.socketService.emit('find_game', { name: this.player.name });
  }
}
