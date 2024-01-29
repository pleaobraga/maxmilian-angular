import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  template: `<div class="container">
    <button class="btn btn-primary" (click)="onStart()">start</button>
    <button class="btn btn-secondary" (click)="onStop()">stop</button>
  </div> `,
  styleUrl: './game-control.component.css',
})
export class GameControlComponent {
  intervId: ReturnType<typeof setTimeout>;
  interval: number = 0;
  @Output() onSendValue = new EventEmitter<number>();

  onStart() {
    this.intervId = setInterval(() => {
      console.log(this.interval);
      this.onSendValue.emit(this.interval);
      this.interval++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervId);
  }
}
