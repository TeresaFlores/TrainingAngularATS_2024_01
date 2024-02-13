import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { CarteleraPageComponent } from './pages/cartelera-page/cartelera-page.component';

const routes: Routes = [
  { path: "", component: CarteleraPageComponent },
  { path: 'pelicula/:id', component: MoviePageComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BoletosRoutingModule { }
