import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PromocionesComponent,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
