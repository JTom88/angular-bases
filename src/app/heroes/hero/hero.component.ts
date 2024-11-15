import { Component } from '@angular/core';


@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "ironman";
  public age:  number = 45;

  get capitalizedName(): string{
    return this.name.toUpperCase()
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`

  }
  //Cambiar nombre a Spiderman
  changeHero(): void{
    this.name = 'Spiderman'
  }

  //Cambia la edad a una diferente de 45
  changeAge(): void{
    this.age = 50
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45
  }

}
