import { Component } from '@angular/core';

@Component({
  selector: 'app-select-asientos',
  templateUrl: './select-asientos.component.html',
  styleUrls: ['./select-asientos.component.css']
})
export class SelectAsientosComponent {
  filas: number[][] = [];

  constructor() {
    this.generarAsientos();
  }

  generarAsientos() {
    for (let fila = 1; fila <= 5; fila++) {
      let asientosFila: number[] = [];
      for (let asiento = 1; asiento <= 4; asiento++) {
        asientosFila.push(fila * 10 + asiento);
      }
      this.filas.push(asientosFila);
    }
  }

  toggleSeleccion(asiento: number) {
    console.log('Asiento seleccionado:', asiento);
  }
}
