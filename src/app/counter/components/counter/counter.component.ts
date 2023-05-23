import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

    <button (click)="putTo22()">A 22</button>
    <br /><br />
    <input id="boxPlus" [(ngModel)]="inputValue" />
    <button (click)="increaseBy(+inputValue)">Suma</button>
    <button (click)="increaseBy(-inputValue)">Resta</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;
  public textoCantidad: string = '';
  number: any;
  inputValue!: number;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }

  putTo22() {
    this.counter = 22;
  }
}
