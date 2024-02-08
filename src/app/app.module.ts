import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { FoodComponent } from './pages/food/food.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HyphenizyPipe } from './pipes/hyphenizy.pipe';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ErrorComponent } from './pages/error/error.component';
import { FoodModalComponent } from './pages/food/food-modal/food-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsCompletedComponent } from './pages/tickets/tickets-completed/tickets-completed.component';
import { PurchaseCompletedComponent } from './common/sidebar/purchase-completed/purchase-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesComponent,
    FoodComponent,
    ContactComponent,
    NavbarComponent,
    SidebarComponent,
    MovieComponent,
    HyphenizyPipe,
    TicketsComponent,
    ErrorComponent,
    FoodModalComponent,
    TicketsCompletedComponent,
    PurchaseCompletedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
