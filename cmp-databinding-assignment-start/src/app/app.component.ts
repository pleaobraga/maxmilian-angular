import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-game-control
      (onSendValue)="onValueRecived($event)"
    ></app-game-control>
    <div class="container">
      @for (value of values; track $index) { @if (value % 2 === 0) {
      <app-even [value]="value"></app-even>
      } @else {
      <app-odd [value]="value"></app-odd>
      }}
    </div> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  values: number[] = [];

  onValueRecived(value: number) {
    this.values.push(value);
  }
}
