import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p style="color: red">{{ value }}</p> `,
  styleUrl: './even.component.css',
})
export class EvenComponent {
  @Input() value: number;
}
