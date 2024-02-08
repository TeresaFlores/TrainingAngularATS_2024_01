import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { CardMovieComponent } from './card-movie/card-movie.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    CardMovieComponent
  ]
})
export class SharedModule { }
