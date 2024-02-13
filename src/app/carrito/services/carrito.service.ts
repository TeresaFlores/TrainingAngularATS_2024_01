import { Injectable } from '@angular/core';
import { Combo } from 'src/app/alimentos/interfaces/combo.interface';
import { Pelicula } from 'src/app/shared/interfaces/pelicula';

@Injectable({
    providedIn: 'root'
})
export class CarritoService {
    private carrito: any[] = [];

    agregarPelicula(pelicula: Pelicula) {
        this.carrito.push({ nombre: pelicula.titulo, precio: 50 });
        console.log('Carrito', this.carrito);
    }

    agregarAlimento(combo: Combo){
        this.carrito.push({ nombre: combo.nombre, precio: combo.precio });
        console.log('Carrito', this.carrito);
    }

  obtenerCarrito() {
    return this.carrito;
  }
}