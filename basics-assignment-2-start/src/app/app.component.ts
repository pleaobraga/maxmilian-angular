import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';

  onClick() {
    this.username = '';
  }

  isUsernameEmpty() {
    return this.username.length === 0;
  }
}
