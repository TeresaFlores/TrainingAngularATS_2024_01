import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { BoletosRoutingModule } from './boletos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarteleraPageComponent } from './pages/cartelera-page/cartelera-page.component';



@NgModule({
  declarations: [
    MoviePageComponent,
    CarteleraPageComponent
  ],
  imports: [
    CommonModule,
    BoletosRoutingModule,
    SharedModule
  ]
})
export class BoletosModule { }
