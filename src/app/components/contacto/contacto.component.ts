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
    correo: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.contactoForm.valid) {
      console.log(this.contactoForm.value);
    }
  }
}
