import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange/exchange.service';
import { CartItem, FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  showModal = false;

  constructor(
    private foodService: FoodService,
    private exchangeService: ExchangeService
  ) {}

  get cartTotal() {
    return this.foodService.itemsInCart.reduce((acc, item) => {
      return acc + item.totalPrice;
    }, 0);
  }

  getCorrectVal(val: number) {
    return this.exchangeService.getCorrectValue(val);
  }

  get currencyType() {
    return this.exchangeService.currencyType;
  }

  get items() {
    return this.foodService.itemsInCart;
  }

  get showCart() {
    return this.foodService.itemsInCart.length > 0;
  }

  deleteItem(item: CartItem) {
    this.foodService.itemsInCart = this.foodService.itemsInCart.filter(
      (cartItem) => cartItem.id !== item.id
    );
  }

  completeCartPurchase(event: MouseEvent) {
    event.stopPropagation();
    this.showModal = true;
    this.foodService.clearCart();
  }

  closeModal() {
    this.showModal = false;
  }
}
