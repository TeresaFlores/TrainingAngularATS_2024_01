import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './components/shared/dynamic-form/dynamic-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperComponent } from './components/shared/ui/wrapper/wrapper.component';
import { HeroComponent } from './components/hero/hero.component';
import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
