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
  constructor(private socketService: SocketService) {
    socketService.init();
  }

  isInGame: IsInGame = {
    value: false,
  };
}

export class Player {
  name: string;
}

export class IsInGame {
  value: boolean;
}
