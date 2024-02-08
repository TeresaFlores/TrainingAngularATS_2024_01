import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { FoodComponent } from './pages/food/food.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MoviesComponent } from './pages/movies/movies.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'food', component: FoodComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'movies/:id', component: MoviesComponent},
  {path: '', pathMatch: 'full', redirectTo: "/home"},
  {path: '**', pathMatch: 'full', redirectTo: "/home"}
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
