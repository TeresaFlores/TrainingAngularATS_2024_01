// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { StorageKeys, Currency } from '../models/enums.defs';
import { CartItem, CartComboItem } from '../models/cart.defs';

/**
 * Service for managing the overall shopping cart.
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: (CartItem | CartComboItem)[] = [];
  private selectedCurrency: Currency = Currency.MXN; // Default currency
  private exchangeRates: { [currency in Currency]: number } = {
    [Currency.MXN]: 1, // Default exchange rate for the base currency
    /**
     * @todo if I have enough time, get the exchange rate from API
     */
    [Currency.USD]: Number(() => 1 / 17.16),
    [Currency.EUR]: Number(() => 1 / 18.62),
  };

  constructor() {
    this.loadCartItems();
  }

  /**
   * Get all items in the shopping cart.
   * @returns {(CartItem | CartComboItem)[] } An array of cart items or combos.
   */
  getCartItems(): (CartItem | CartComboItem | unknown)[] {
    return this.cartItems;
  }

  /**
   * Get the currently selected currency.
   * @returns {Currency} The selected currency code (e.g., 'MXN').
   */
  getSelectedCurrency(): Currency {
    return this.selectedCurrency;
  }

  /**
   * Set the selected currency.
   * @param {Currency} currency The currency code to set (e.g., 'MXN').
   */
  setSelectedCurrency(currency: Currency): void {
    this.selectedCurrency = currency;
    this.saveCartItems();
  }

  /**
   * Get the exchange rate for the specified target currency.
   * @param {Currency} targetCurrency - The target currency for which to retrieve the exchange rate.
   * @returns {number} - The exchange rate for the target currency. Returns 1 if the exchange rate is not available.
   */
  getExchangeRate(targetCurrency: Currency): number {
    return this.exchangeRates[targetCurrency] || 1;
  }

  /**
   * Convert a price from the base currency to the selected currency.
   * @param {number} price - The price to be converted.
   * @returns {number} - The converted price in the selected currency.
   */
  convertPriceToSelectedCurrency(price: number): number {
    const exchangeRate = this.getExchangeRate(this.selectedCurrency);
    return price * exchangeRate;
  }

  /**
   * Add an item to the shopping cart.
   * @param item The item to be added to the cart.
   */
  addItemToCart(item: any): void {
    this.cartItems.push(item);
    this.saveCartItems();
  }

  /**
   * Remove an item from the shopping cart.
   * @param itemId The ID of the item to be removed.
   */
  removeItemFromCart(itemId: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.saveCartItems();
  }

  /**
   * Clear all items from the shopping cart.
   */
  clearCart(): void {
    this.cartItems = [];
    this.saveCartItems();
  }

  /**
   * Calculate the total price and discount percentage for a combo item.
   *
   * @param {ComboItem} comboItem - The combo item for which to calculate the total and discount.
   * @returns {Object} - An object containing the calculated total and discount percentage.
   * @property {number} total - The total price of the combo item after applying the discount.
   * @property {number} discountPercentage - The discount percentage applied to the combo item.
   */
  calculateComboTotalAndDiscount(comboItem: CartComboItem): { total: number; discountPercentage: number } {
    const total = comboItem.items.reduce((acc, curr) => acc + this.convertPriceToSelectedCurrency(curr.price), 0);
    const discountPercentage = comboItem.discountPercentage;
    return { total, discountPercentage };
  }

  /**
   * Load cart items from localStorage.
   * This method is called on service initialization.
   */
  private loadCartItems(): void {
    const storedItems = localStorage.getItem(StorageKeys.CartItems);
    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
  }

  /**
   * Save cart items to localStorage.
   */
  private saveCartItems(): void {
    localStorage.setItem(StorageKeys.CartItems, JSON.stringify(this.cartItems));
  }
}
