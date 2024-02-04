import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './layouts/footer/footer.component';
import { CarruselComponent } from './components/molecules/carrusel/carrusel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarteleraComponent } from './components/molecules/cartelera/cartelera.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { CinesComponent } from './components/atoms/select-cines/cines.component';
import { CardMovieComponent } from './components/atoms/card-movie/card-movie.component';
import { BtnHoursComponent } from './components/atoms/btn-hours/btn-hours.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { ComidaComponent } from './pages/comida/comida.component';
import { CarritoComponent } from './components/molecules/carrito/carrito.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    FooterComponent,
    CarruselComponent,
    CarteleraComponent,
    HomeComponent,
    CinesComponent,
    CardMovieComponent,
    BtnHoursComponent,
    ComidaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CarouselModule,
    MatCardModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
