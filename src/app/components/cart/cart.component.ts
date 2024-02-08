import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ticket } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private currencySubscription: Subscription;

  open = false;
  currency: 'USD' | 'EUR' | 'MXN' = 'MXN';

  cart: Ticket[] = [
    {
      name: '',
      qty: 0,
      price: 0,
    },
  ];

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {
    this.subscription = this.cartService.open$.subscribe((open) => {
      this.open = open;
    });
    this.subscription = this.cartService.cart$.subscribe((cart) => {
      this.cart = cart;
    });
    this.currencySubscription = this.cartService.currency$.subscribe(
      (currency) => {
        this.currency = currency;
      }
    );
  }

  closeCart() {
    this.cartService.closeCart();
  }

  cleanCart() {
    this.cartService.closeCart();
    this.cartService.clearCart();
  }

  getItemQty() {
    let total = 0;
    this.cart.forEach((item) => {
      total = total + item.qty;
    });

    return total;
  }

  getTotalPrice() {
    let total = 0;
    this.cart.forEach((item) => {
      total = total + item.price;
    });

    return total;
  }

  changeCurrency(newCurrency: 'USD' | 'EUR' | 'MXN') {
    this.cartService.changeCurrency(newCurrency);
  }

  payCart() {
    this.toastService.setMessage(
      `Your payment for ${
        this.currency
      } ${this.getTotalPrice()} has been successfully done!`
    );
    this.toastService.openToast();
    this.cartService.closeCart();
    this.cartService.clearCart();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.currencySubscription.unsubscribe();
  }
}
