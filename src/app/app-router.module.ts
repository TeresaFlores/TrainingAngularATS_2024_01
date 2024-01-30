import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { SnacksComponent } from './views/snacks/snacks.component';
import { SnackComponent } from './views/snack/snack.component';
import { MovieComponent } from './views/movie/movie.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'snacks', component: SnacksComponent },
  { path: 'snacks/:id', component: SnackComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}