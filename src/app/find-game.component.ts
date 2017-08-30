import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-find-game',
  templateUrl: './find-game.component.html',
  // styleUrls: ['./app.component.css']
})
export class FindGameComponent {
  constructor(private socketService: SocketService) {
    socketService.on('game_found', function (data) {
      console.log(data);
    });
  }

  title = 'Riichi Mahjong';
  player: Player = {
    name: ''
  };

  httpRes = '';

  onFindAGame() {
    this.socketService.emit('find_game', { name: this.player.name });
  }
}

export class Player {
  name: string;
}
