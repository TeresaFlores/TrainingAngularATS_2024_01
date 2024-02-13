import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CarteleraComponent,
    LoadingSpinnerComponent,
    PeliculaComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CarteleraComponent,
    LoadingSpinnerComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
