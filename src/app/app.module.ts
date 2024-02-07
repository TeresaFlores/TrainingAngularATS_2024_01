import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { StoreComponent } from './components/store/store.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TicketsComponent, StoreComponent, ContactComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
