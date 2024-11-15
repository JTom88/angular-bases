import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  //Creamos esta variable para poderla usar en la función removeLastHero
  //y poder usarla fuera de la función, para que devuelve el string eliminado
  public deletedHero?: string;

  //Creamos una función que no recibe nada ni devuelve nada (void),
  //con this.heronames hacemos referencia al arreglo
  //con pop() elimina el ultimo elemento y lo devuelve (como string o undefinded)
  removeLastHero() : void {
    this.deletedHero = this.heroNames.pop()
  }

}
