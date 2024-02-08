import { Injectable } from '@angular/core';
import { Food, FoodCategory, data, foodCategories } from './utils';

export type CartItem = {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
  totalPrice: number;
};

export const generateRandomId = () => Math.random().toString(16).slice(2);
const mockItems: CartItem[] = [
  {
    id: generateRandomId(),
    name: 'Combo Nachos en Pareja',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/c0de5a580b3c95e93a4541a86780cf86/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 280,
    quantity: 1,
    totalPrice: 280,
  },
  {
    id: generateRandomId(),
    name: 'Combo Mix',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 1 Hot Dog + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/2a8f37f5ad58bf02765afefb29c2f250/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 361,
    quantity: 1,
    totalPrice: 361,
  },
  {
    id: generateRandomId(),
    name: 'Bagui Pavo',
    description: 'Baguette con pechuga de pavo y queso a elegir. ',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/b4171eb89139b8e737180031161e82b7/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 154,
    quantity: 1,
    totalPrice: 154,
  },
  {
    id: generateRandomId(),
    name: 'Combo Nachos en Pareja',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/c0de5a580b3c95e93a4541a86780cf86/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 280,
    quantity: 1,
    totalPrice: 280,
  },
  {
    id: generateRandomId(),
    name: 'Combo Mix',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 1 Hot Dog + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/2a8f37f5ad58bf02765afefb29c2f250/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 361,
    quantity: 1,
    totalPrice: 361,
  },
  {
    id: generateRandomId(),
    name: 'Bagui Pavo',
    description: 'Baguette con pechuga de pavo y queso a elegir. ',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/b4171eb89139b8e737180031161e82b7/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 154,
    quantity: 1,
    totalPrice: 154,
  },
  {
    id: generateRandomId(),
    name: 'Combo Nachos en Pareja',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/c0de5a580b3c95e93a4541a86780cf86/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 280,
    quantity: 1,
    totalPrice: 280,
  },
  {
    id: generateRandomId(),
    name: 'Combo Mix',
    description:
      'Palomitas Cinépolis® Para Llevar + 1 Nachos Grandes + 1 Hot Dog + 2 latas de refresco de 355 ml.',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/2a8f37f5ad58bf02765afefb29c2f250/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 361,
    quantity: 1,
    totalPrice: 361,
  },
  {
    id: generateRandomId(),
    name: 'Bagui Pavo',
    description: 'Baguette con pechuga de pavo y queso a elegir. ',
    image:
      'https://tb-static.uber.com/prod/image-proc/processed_images/b4171eb89139b8e737180031161e82b7/4218ca1d09174218364162cd0b1a8cc1.jpeg',
    price: 154,
    quantity: 1,
    totalPrice: 154,
  },
];

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foods: Food[] = data;
  foodsCategories: FoodCategory[] = foodCategories;
  itemsInCart: CartItem[] = mockItems;

  constructor() {}

  addItemToCart(item: CartItem) {
    console.log(item);
    this.itemsInCart.push(item);
  }

  clearCart() {
    this.itemsInCart = [];
  }
}
