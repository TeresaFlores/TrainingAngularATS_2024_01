import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BoletosComponent } from './boletos/boletos.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PromosComponent } from './promos/promos.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { IconoBtnComponent } from './shared/icono-btn/icono-btn.component';
import { DrawerComponent } from './shared/drawer/drawer.component';
import { MultiplicadorPipe } from '../pipes/multiplicador.pipe';

import { MayusculasDirective } from '../directivas/mayusculas.directive';
import { CapitalizarPalabraDirective } from '../directivas/capitalizar-palabra.directive';
import { DetalleComboComponent } from './alimentos/detalle-combo/detalle-combo.component';

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
    LoadingComponent,
    TituloComponent,
    IconoBtnComponent,
    DrawerComponent,
    MultiplicadorPipe,
    DetalleComboComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, IconoBtnComponent, DrawerComponent],
  bootstrap: [HeaderComponent],
})
export class ComponentsModule {}
