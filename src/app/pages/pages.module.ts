import { PipesModule } from './../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './../components/components.module';
import { FormsModule } from '@angular/forms';


import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    PipesModule
  ]
})
export class PagesModule { }
