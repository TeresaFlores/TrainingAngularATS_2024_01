import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeService } from 'src/app/services/exchange/exchange.service';
import { MoviesService } from 'src/app/services/movies/movies.service';
import {
  Movie,
  Seat,
  SelectedScreening,
  Ticket,
  TicketType,
} from 'src/app/services/movies/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent {
  selectedMovie: Movie | undefined;
  selectedScreening: SelectedScreening | undefined;
  currentStep: 'seats' | 'tickets' = 'seats';
  showModal = false;

  constructor(
    private moviesService: MoviesService,
    private router: Router,
    private exchangeService: ExchangeService
  ) {
    this.selectedMovie = this.moviesService.selectedMovie;
    this.selectedScreening = this.moviesService.selectedScreening;
  }

  ngOnInit() {
    this.showModal = false;
  }

  get seatRows() {
    return this.selectedScreening?.screening.seatRows;
  }

  get currencyType() {
    return this.exchangeService.currencyType;
  }

  get selectedSeats() {
    return this.moviesService.selectedSeats;
  }

  get remainingTickets() {
    return this.selectedSeats.length - this.getTotalTickets();
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

  disableMinus(ticketType: TicketType) {
    return this.moviesService.selectedTickets[ticketType] === 0;
  }

  getTotalTickets() {
    return Object.values(this.moviesService.selectedTickets).reduce(
      (acc, value) => acc + value,
      0
    );
  }

  getCorrectVal(val: number) {
    return this.exchangeService.getCorrectValue(val);
  }

  getTotalPrice() {
    return this.ticketsPrices.reduce((acc, ticketPrice) => {
      const ticketsQuantity = this.getSelectedTickets(ticketPrice.type);
      return acc + ticketsQuantity * ticketPrice.price;
    }, 0);
  }

  disablePlus() {
    return this.getTotalTickets() === this.moviesService.selectedSeats.length;
  }

  disablePurchase() {
    return this.getTotalTickets() !== this.moviesService.selectedSeats.length;
  }

  selectSeat(seat: Seat, row: string) {
    seat.selected = !seat.selected;
    this.moviesService.updateSeats(seat, row);
  }

  updateTickets(ticket: TicketType, quantity: number) {
    this.moviesService.updateTickets(ticket, quantity);
  }

  completeSeatsSelection() {
    this.currentStep = 'tickets';
  }

  returnToSeatsSelection() {
    this.currentStep = 'seats';
    this.moviesService.resetTickets();
  }

  completePurchase() {
    this.showModal = true;
  }

  returnToHome() {
    this.router.navigate([`/movies`]);
  }
}
