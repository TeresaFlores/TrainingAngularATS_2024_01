import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeService } from 'src/app/services/exchange/exchange.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import {
  Movie,
  SelectedScreening,
  Ticket,
  TicketType,
} from 'src/app/services/movies/utils';

@Component({
  selector: 'app-tickets-completed',
  templateUrl: './tickets-completed.component.html',
  styleUrls: ['./tickets-completed.component.scss'],
})
export class TicketsCompletedComponent {
  @Input() selectedMovie: Movie | undefined;
  @Input() selectedScreening: SelectedScreening | undefined;
  @Output() closeEvent = new EventEmitter();

  constructor(
    private moviesService: MoviesService,
    private exchangeService: ExchangeService
  ) {
    this.selectedMovie = this.moviesService.selectedMovie;
    this.selectedScreening = this.moviesService.selectedScreening;
  }

  get selectedSeats() {
    return this.moviesService.selectedSeats;
  }

  get currencyType() {
    return this.exchangeService.currencyType;
  }

  get ticketsPrices() {
    const tickets = this.selectedMovie
      ? Object.entries(this.selectedMovie.ticketsPrices).reduce(
          (acc, [type, price]) => {
            const ticket = { type, price } as Ticket;
            return acc.concat(ticket);
          },
          [] as Ticket[]
        )
      : [];
    return tickets;
  }

  getSelectedTickets(ticketType: TicketType) {
    return this.moviesService.selectedTickets[ticketType];
  }

  getTotalTickets() {
    return Object.values(this.moviesService.selectedTickets).reduce(
      (acc, value) => acc + value,
      0
    );
  }

  getTotalPrice() {
    const total = this.ticketsPrices.reduce((acc, ticketPrice) => {
      const ticketsQuantity = this.getSelectedTickets(ticketPrice.type);
      return acc + ticketsQuantity * ticketPrice.price;
    }, 0);
    return this.exchangeService.getCorrectValue(total);
  }

  closeModal(event: MouseEvent) {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.id === 'modal-area' || target.id === 'close-button')
    ) {
      this.closeEvent.emit();
    }
  }
}
