import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListaComponent } from "./lista/lista.component";


@NgModule({
  declarations: [HeroComponent, ListaComponent],
  imports: [],
  exports: [HeroComponent, ListaComponent]
})


export class HeroesModule {}
