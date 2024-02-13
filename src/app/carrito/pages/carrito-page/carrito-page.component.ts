import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.css']
})
export class CarritoPageComponent {

  public carrito: any[] = [];
  // public totalCarrito: number = 0;

  get totalCarrito() {
    return this.carrito.reduce((total, item) => total + item.precio, 0);
  }

  constructor(private carritoService: CarritoService) {
    this.carrito = this.carritoService.obtenerCarrito();
    
  }
}
