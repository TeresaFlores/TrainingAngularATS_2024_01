import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    asunto: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.contactoForm.valid) {
      console.log('Form is valid. Submitting...');
      // Additional actions can be performed here
    } else {
      console.log('Form is invalid. Cannot submit.');
    }
  }
}
