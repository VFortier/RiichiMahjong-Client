import * as io from 'socket.io-client';

import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
  socket;

  init(): void {
      this.socket = io('localhost:9092'); // TODO: in config
  }
  emit(eventName, data): void {
    this.socket.emit(eventName, data);
  }
  on(eventName, callback): void {
    this.socket.on(eventName, callback);
  }
}
