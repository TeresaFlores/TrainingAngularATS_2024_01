import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    name: '',
    email: '',
    asunto: '',
    message: ''
  };

  onInputChange(event: any) {
    this.formData.asunto = event.target.value.toUpperCase();
  }

  submitForm() {
    console.log('Formulario enviado:', this.formData);
  }
}
