import { Component, OnInit } from '@angular/core';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  // styleUrls: ['./app.component.css']
})
export class GameComponent implements OnInit {


  constructor(private socketService: SocketService) { }

  ngOnInit() {
    console.log('GameComponent');
//    this.socketService.on('game_found', (data) => {
//      this.gameFindingState.state = FindGameState.FOUND;
//    });
  }
}
