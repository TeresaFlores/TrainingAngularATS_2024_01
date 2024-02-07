import { Component } from '@angular/core';
import { CartService } from 'src/app/services/carrito/cart.service';
import { ComidaService } from 'src/app/services/comida/comida.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent {
  listProductos: any[] = [];

  constructor(
    private cartService: CartService,
    private combosService: ComidaService
  ) {}

  ngOnInit(): void {
    this.getCombosPyR();
  }

  addToCart(item: string) {
    this.cartService.addToCart(item);
  }

  getCombosPyR() {
    this.listProductos = this.combosService.getDataCombos();
  }
}
