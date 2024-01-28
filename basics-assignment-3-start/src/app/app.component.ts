import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="onClick()">Display Details</button>
    @if (isShowingContent) {
    <p>Paragraph Pedro</p>
    }

    <div>
      <h2>Button logs</h2>

      @for (item of buttonClicks; track $index) {
      <p [ngStyle]="{ backgroundColor: $index >= 5 && 'blue' }">
        <span [ngClass]="{ 'white-color': $index >= 5 }">{{ item }}</span>
      </p>
      } @empty {
      <p>
        <span>there's no log to display</span>
      </p>
      }
    </div>
  `,
  styles: `.white-color {
    color: white;
  }`,
})
export class AppComponent {
  isShowingContent = false;
  buttonClicks: string[] = [];

  onClick() {
    this.isShowingContent = !this.isShowingContent;
    this.buttonClicks.push(String(new Date().getTime()));
  }
}
