import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/services/carrito/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  items: any[] = [];
  total: number = 0

  @Output() cerrarDrawer = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.actualizarItems();
  }

  actualizarItems() {
    this.items = this.cartService.getItems();
  }

  cerrarCarrito() {
    this.cerrarDrawer.emit();
  }

  clearCart() {
    if(!this.onDisabled(this.items)) {
      this.items = this.cartService.clearCart();
      this.actualizarItems();
    }
  }

  removeFromCart(item: any): void {
    this.cartService.removeFromCart(item);
  }

  calcularTotal(): number {
    this.total = 0;
    for (const item of this.items) {
      let totalItem = item.price * item.cantidad;
      this.total += totalItem;
    }
    return this.total;
  }

  checkout(): void {
    if(!this.onDisabled(this.items)) {
      this.items = this.cartService.clearCart();
      this.actualizarItems();
      alert('¡Gracias por su compra!');
    }
  }

  onDisabled(quantity: any) {
    return quantity.length > 0 ? false : true
  }
}

