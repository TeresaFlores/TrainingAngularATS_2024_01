import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/carrito/cart.service';
import { CinesService } from 'src/app/services/cines/cines.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  listCines: any[] = [];
  listItems!: number;
  private cartSubscription: Subscription | undefined;

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(
    private cineService: CinesService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCines();
    this.getTotalItems();
    this.cartSubscription = this.cartService.getTotalItemsObservable().subscribe(totalItems => {
      this.listItems = totalItems; // Actualizar listItems cuando cambie el carrito
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  getCines() {
    this.listCines = this.cineService.getDataCines();
  }

  cerrarDrawer() {
    this.drawer.close();
  }

  getTotalItems() {
    this.listItems = this.cartService.getItems().length;
  }
}
