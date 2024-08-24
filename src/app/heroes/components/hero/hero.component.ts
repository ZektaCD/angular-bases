import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Iron man";
  public age: number = 45;

  get capitalizedName(): string{

    return this.name.toLocaleUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(newName: string): void{
    this.name = newName;
  }

  changeAge(newAge: number): void{
    this.age = newAge;
  }

  resetValues(): void{
    this.name = 'Iron man'
    this.age = 45
  }
}
