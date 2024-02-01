import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { BoletosComponent } from './boletos/boletos.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PromosComponent } from './promos/promos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

import { MayusculasDirective } from '../directivas/mayusculas.directive';
import { CapitalizarPalabraDirective } from '../directivas/capitalizar-palabra.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    BoletosComponent,
    AlimentosComponent,
    ContactoComponent,
    PromosComponent,
    PeliculasComponent,
    MayusculasDirective,
    CapitalizarPalabraDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  exports: [HeaderComponent],
  bootstrap: [HeaderComponent],
})
export class ComponentsModule {}
