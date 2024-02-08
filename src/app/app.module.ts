import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { StoreComponent } from './components/store/store.component';
import { ContactComponent } from './components/contact/contact.component';
import { MoviesService } from './services/movies.service';
import { StoreService } from './services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TicketsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    StoreComponent,
    ReactiveFormsModule,
  ],
  providers: [MoviesService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
