import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Ticket } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private open = new BehaviorSubject<boolean>(false);
  private cart = new BehaviorSubject<Ticket[]>([]);
  private currency = new Subject<'USD' | 'EUR' | 'MXN'>();

  cart$ = this.cart.asObservable();
  open$ = this.open.asObservable();
  currency$ = this.currency.asObservable();

  constructor() {}

  openCart() {
    this.open.next(true);
  }

  closeCart() {
    this.open.next(false);
  }

  addItem(item: Ticket) {
    const itemIndex = this.cart.value.findIndex((el) => el.name === item.name);
    if (itemIndex >= 0) {
      this.cart.value[itemIndex].qty =
        this.cart.value[itemIndex].qty + item.qty;
      this.cart.value[itemIndex].price =
        this.cart.value[itemIndex].price + item.price;
    } else {
      this.cart.next([...this.cart.value, item]);
    }
  }

  deleteItem(item: Ticket) {
    const itemIndex = this.cart.value.findIndex((el) => el.name === item.name);
    this.cart.value.splice(itemIndex, 1);
  }

  getCart() {
    return this.cart.value;
  }

  clearCart() {
    this.cart.next([]);
  }

  changeCurrency(receivedCurrency: 'USD' | 'EUR' | 'MXN') {
    this.currency.next(receivedCurrency);
  }
}
