import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {
  fueEnviado: boolean = false;
  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    asunto: new FormControl('', [Validators.required]),
    mensaje: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.fueEnviado = true;
    if (this.contactoForm.valid) {
      console.log(this.contactoForm.value);
    }
  }

  get getContactoForm() {
    return {
      nombre: this.contactoForm.get('nombre'),
      correo: this.contactoForm.get('correo'),
      asunto: this.contactoForm.get('asunto'),
      mensaje: this.contactoForm.get('mensaje'),
    };
  }
}
