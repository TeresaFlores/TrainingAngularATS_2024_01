import { Injectable } from '@angular/core';
import { StoreCombo, StoreFood } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  private combos: StoreCombo[] = [
    {
      image: 'assets/food/combo.webp',
      name: 'Pizza Combo',
      price: '180.00',
      description: 'Large popcorn, large soda & pizza',
    },
    {
      image: 'assets/food/combo2.webp',
      name: 'Hotdog Combo',
      price: '150.00',
      description: 'Large popcorn, large soda & hotdog',
    },
    {
      image: 'assets/food/combo.webp',
      name: "Couple's Combo",
      price: '260.00',
      description: 'Large popcorn, 2 large sodas, 2 hotdogs',
    },
  ];

  private popcorn: StoreFood[] = [
    {
      image: 'assets/food/popcorn.webp',
      name: 'Small Popcorn',
      price: '50.00',
    },
    {
      image: 'assets/food/popcorn.webp',
      name: 'Medium Popcorn',
      price: '60.00',
    },
    {
      image: 'assets/food/popcorn.webp',
      name: 'Large Popcorn',
      price: '70.00',
    },
  ];

  private soda: StoreFood[] = [
    {
      image: 'assets/food/soda.webp',
      name: 'Small soda',
      price: '40.00',
    },
    {
      image: 'assets/food/soda.webp',
      name: 'Medium soda',
      price: '50.00',
    },
    {
      image: 'assets/food/soda.webp',
      name: 'Large soda',
      price: '60.00',
    },
  ];

  private food: StoreFood[] = [
    {
      image: 'assets/food/hotdog.webp',
      name: 'Hot Dog',
      price: '50.00',
    },
    {
      image: 'assets/food/pizza.webp',
      name: 'Pizza',
      price: '75.00',
    },
  ];

  getCombos(): StoreCombo[] {
    return this.combos;
  }
  getSodas(): StoreFood[] {
    return this.soda;
  }
  getPopcorns(): StoreFood[] {
    return this.popcorn;
  }
  getFood(): StoreFood[] {
    return this.food;
  }
}
