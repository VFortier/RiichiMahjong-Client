import { Component, OnInit, Input } from '@angular/core';

import { SocketService } from './socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  // styleUrls: ['./app.component.css']
})
export class GameComponent implements OnInit {
  @Input() game: Object;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    console.log(this.game);
  }
}
