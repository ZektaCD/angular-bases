import { Component } from "@angular/core";


@Component({
  selector:'app-counter',
  // template:'<h1>Mi Primer Componente</h1>',
  template:`
    <h3>Counter: {{ counter }}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent{

  public counter: number = 10;

// increaseBy(value: number): void {
  //   if(value == 0){
  //     this.counter += 1;
  //   }else{
  //     this.counter -= 1;
  //   }

  // }


  // decreaseBy(): void{
  //   this.counter -= 1;
  // }

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void{
    this.counter = 10;
  }
}
