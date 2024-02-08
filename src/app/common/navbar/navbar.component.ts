import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange/exchange.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private exchangeService: ExchangeService) {}

  get currencyType() {
    return this.exchangeService.currencyType;
  }

  changeCurrencyType() {
    const current = this.exchangeService.currencyType;
    if (current === 'MXN') {
      this.exchangeService.currencyType = 'USD';
    } else if (current === 'USD') {
      this.exchangeService.currencyType = 'EUR';
    } else {
      this.exchangeService.currencyType = 'MXN';
    }
  }
}
