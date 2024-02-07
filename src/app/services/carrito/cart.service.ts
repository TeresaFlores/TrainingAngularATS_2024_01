import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);
  private totalItemsSubject = new BehaviorSubject<number>(0); // Nuevo BehaviorSubject para el total de productos

  constructor() { }

  addToCart(item: any) {
    const existingItemIndex = this.items.findIndex(i => i.id === item.id);
    if (existingItemIndex !== -1) {
      this.items[existingItemIndex].cantidad++;
    } else {
      item.cantidad = 1;
      this.items.push(item);
    }
    this.actualizarTotalItems(); // Llamar a la función para actualizar el total de productos
    this.cartSubject.next(this.items);
  }

  removeFromCart(index: number) {
    this.items.splice(index, 1);
    this.cartSubject.next(this.items);
    this.actualizarTotalItems();
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
    this.actualizarTotalItems();
    return this.items;
  }

  getCartObservable() {
    return this.cartSubject.asObservable(); // Observable para suscribirse a los cambios en el carrito
  }

  getTotalItemsObservable() {
    return this.totalItemsSubject.asObservable(); // Observable para obtener el total de productos
  }

  actualizarTotalItems() {
    const totalItems = this.items.reduce((total, item) => total + item.cantidad, 0);
    this.totalItemsSubject.next(totalItems); // Emitir el nuevo total de productos
  }
}
