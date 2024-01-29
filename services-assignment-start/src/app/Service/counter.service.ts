import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  inativationCounter = 0;
  ativationCounter = 0;

  countInativation() {
    this.inativationCounter++;
  }

  countAtivation() {
    this.ativationCounter++;
  }
}
