import { Component } from '@angular/core';
import { CartService } from 'src/app/services/carrito/cart.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  palomitasSize: string = 'pequeño';
  refrescoSize: string = 'pequeño';

  constructor(private cartService: CartService) {}

  addToCart(item: string) {
    this.cartService.addToCart(item);
  }
}
