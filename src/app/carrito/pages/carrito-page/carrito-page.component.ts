import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'carrito-page',
  templateUrl: './carrito-page.component.html',
  styleUrls: ['./carrito-page.component.css']
})
export class CarritoPageComponent {
  public tasaCambio: number = 1;
  public moneda: "MXN" | "USD" | "EUR" = "MXN";
  public carrito: any[] = [];
  public compraRealizada: boolean = false;

  get totalCarrito() {
    return this.carrito.reduce((total, item) => total + item.precio, 0) * this.tasaCambio;
  }

  constructor(private carritoService: CarritoService) {
    this.carrito = this.carritoService.obtenerCarrito();
  }
}
