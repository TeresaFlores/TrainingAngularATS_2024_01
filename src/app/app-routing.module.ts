import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './pages/food/food.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MovieComponent } from './pages/movie/movie.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'movies/:id/tickets', component: TicketsComponent },
  { path: 'food', component: FoodComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
