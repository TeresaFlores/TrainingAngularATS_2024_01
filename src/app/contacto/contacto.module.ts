import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactoPageComponent
  ]
})
export class ContactoModule { }
