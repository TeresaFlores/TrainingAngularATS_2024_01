import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { DynamicFormComponent } from './components/shared/dynamic-form/dynamic-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperComponent } from './components/shared/ui/wrapper/wrapper.component';
import { HeroComponent } from './components/hero/hero.component';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/shared/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './views/home/home.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { SnacksComponent } from './views/snacks/snacks.component';
import { SnackComponent } from './views/snack/snack.component';
import { MovieComponent } from './views/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    NavigationComponent,
    SidebarComponent,
    ModalComponent,
    NavbarComponent,
    WrapperComponent,
    HeroComponent,
    MoviesSliderComponent,
    MovieCardComponent,
    ButtonComponent,
    HomeComponent,
    TicketsComponent,
    SnacksComponent,
    SnackComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
