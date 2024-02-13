import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { MoviesComponent } from './movies/movies.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    TicketsComponent,
    FoodComponent,
    ContactComponent,
    MoviesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule { }
