import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoPageComponent } from './pages/carrito-page/carrito-page.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    CarritoPageComponent
  ],
  imports: [
    CommonModule,
    [NgbDropdownModule],
  ],
  exports: [
    CarritoPageComponent
  ]
})
export class CarritoModule { }
