import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p style="color: blue;">{{ value }}</p> `,
  styleUrl: './odd.component.css',
})
export class OddComponent {
  @Input() value: number;
}
