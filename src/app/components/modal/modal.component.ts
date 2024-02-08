import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnDestroy {
  movie = '';
  schedule = '';
  ticketQty = 1;
  private ticketPrice = 80;
  private subsciption: Subscription;

  constructor(
    private modalService: ModalService,
    private cartService: CartService
  ) {
    this.subsciption = this.modalService.movie$.subscribe((movie) => {
      this.movie = movie;
    });
    this.subsciption = this.modalService.schedule$.subscribe((sched) => {
      this.schedule = sched;
    });
  }

  selectTickets(ticket: string) {
    this.ticketQty = +ticket;
  }

  clearMessage() {
    this.modalService.resetContent();
  }

  addTicketToCart(name: string, qty: number) {
    const price = this.ticketPrice * qty;
    this.cartService.addItem({ name, qty, price });
    this.cartService.openCart();
    this.clearMessage();
  }

  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }
}
