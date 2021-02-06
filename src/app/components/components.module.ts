import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PkModalComponent } from './pk-modal/pk-modal.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [PokemonComponent, PkModalComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PokemonComponent,
    PkModalComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
