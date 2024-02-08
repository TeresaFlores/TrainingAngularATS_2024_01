import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StoreCombo, StoreFood } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class StoreComponent implements OnInit, OnDestroy {
  combos: StoreCombo[] = [];
  popcorn: StoreFood[] = [];
  soda: StoreFood[] = [];
  food: StoreFood[] = [];

  comboQty: number[] = [];
  popcornQty: number[] = [];
  sodaQty: number[] = [];
  foodQty: number[] = [];

  currency: 'USD' | 'EUR' | 'MXN' = 'MXN';

  private currencySubscription: Subscription;

  constructor(
    private foodService: StoreService,
    private cartService: CartService
  ) {
    this.combos = this.foodService.getCombos();
    this.popcorn = this.foodService.getPopcorns();
    this.food = this.foodService.getFood();
    this.soda = this.foodService.getSodas();

    this.currencySubscription = this.cartService.currency$.subscribe(
      (currency) => (this.currency = currency)
    );
  }

  ngOnInit(): void {
    this.setDefaultComboQty();
    this.setDefaultFoodQty();
    this.setDefaultPopcornQty();
    this.setDefaultSodaQty();
  }

  setDefaultComboQty() {
    this.combos.forEach(() => {
      this.comboQty.push(1);
    });
  }
  setDefaultPopcornQty() {
    this.popcorn.forEach(() => {
      this.popcornQty.push(1);
    });
  }
  setDefaultSodaQty() {
    this.soda.forEach(() => {
      this.sodaQty.push(1);
    });
  }

  setDefaultFoodQty() {
    this.food.forEach(() => {
      this.foodQty.push(1);
    });
  }

  addFoodToCart(itemID: number) {
    const food = this.food[itemID];
    const qty = this.foodQty[itemID];
    const name = food.name;
    const price = +food.price * qty;

    this.cartService.addItem({ name, qty, price });
    this.cartService.openCart();
  }

  addSodaToCart(itemID: number) {
    const food = this.soda[itemID];
    const qty = this.sodaQty[itemID];
    const name = food.name;
    const price = +food.price * qty;

    this.cartService.addItem({ name, qty, price });
    this.cartService.openCart();
  }

  addPopcornToCart(itemID: number) {
    const food = this.popcorn[itemID];
    const qty = this.popcornQty[itemID];
    const name = food.name;
    const price = +food.price * qty;

    this.cartService.addItem({ name, qty, price });
    this.cartService.openCart();
  }
  addComboToCart(itemID: number) {
    const food = this.combos[itemID];
    const qty = this.comboQty[itemID];
    const name = food.name;
    const price = +food.price * qty;

    this.cartService.addItem({ name, qty, price });
    this.cartService.openCart();
  }

  ngOnDestroy(): void {
    this.currencySubscription.unsubscribe();
  }
}
