import { Component } from '@angular/core';
import { CartService } from 'src/app/services/carrito/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  items: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.items = this.cartService.clearCart();
  }

  // Función para eliminar un artículo del carrito
  removeFromCart(item: any): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  // Función para calcular el total del carrito
  calcularTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.precio;
    }
    return total;
  }

  checkout(): void {
    // Aquí puedes agregar la lógica para procesar el pago, como enviar la información a un servidor, etc.
    this.items = [];
    alert('¡Gracias por su compra!');
  }
}
