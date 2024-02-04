import { Component } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  cart: string[] = [];
  palomitasSize: string = 'pequeño';
  refrescoSize: string = 'pequeño';

  addToCart(item: string) {
    this.cart.push(item);
  }
}
