import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Riichi Mahjong';
  player: Player = {
    name: ''
  };

  httpRes = '';

  onFindAGame() {
    // Make the HTTP request:
    this.http.get('http://localhost:3600/').subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
      this.httpRes = data['success'];
    });
  }
}

export class Player {
  name: string;
}
