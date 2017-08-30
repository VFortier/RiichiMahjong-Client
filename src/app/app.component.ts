import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  socket = io('localhost:9092');
  title = 'Riichi Mahjong';
  player: Player = {
    name: ''
  };

  httpRes = '';

  onFindAGame() {
    this.socket.emit('find_game', { player: this.player.name });
  }
}

export class Player {
  name: string;
}
