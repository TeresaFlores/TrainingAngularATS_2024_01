import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  currencyType: 'MXN' | 'USD' | 'EUR' = 'MXN';
  rates = {
    MXN: 1,
    USD: 0.059,
    EUR: 0.054,
  };

  constructor() {}

  changeCurrencyTypeTo(currencyType: 'MXN' | 'USD' | 'EUR') {
    this.currencyType = currencyType;
  }

  getCorrectValue(value: number) {
    return value * this.rates[this.currencyType];
  }
}
