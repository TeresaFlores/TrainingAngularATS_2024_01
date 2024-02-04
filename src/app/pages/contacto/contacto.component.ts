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
    message: ''
  };

  submitForm() {
    // Aquí podrías enviar los datos del formulario a un servicio para su procesamiento
    console.log('Formulario enviado:', this.formData);
    // Aquí puedes agregar la lógica para enviar los datos del formulario a través de un servicio HTTP
    // Por simplicidad, aquí solo imprimimos los datos en la consola
  }
}
