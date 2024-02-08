import { Injectable } from '@angular/core';
import {
  Movie,
  Seat,
  SelectedScreening,
  SelectedSeat,
  SelectedTickets,
  movieData,
} from './utils';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies: Movie[] = [];

  // * filled when user selects a movie and screening time
  selectedMovie: Movie | undefined;
  selectedScreening: SelectedScreening | undefined;

  // * filled when user selects tickets
  selectedSeats: SelectedSeat[] = [];
  selectedTickets: SelectedTickets = {
    adult: 0,
    child: 0,
    senior: 0,
  };

  constructor() {
    this.movies = movieData;
  }

  setSelectedMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  setSelectedScreening(screening: SelectedScreening) {
    this.selectedScreening = screening;
  }

  updateSeats(seat: Seat, row: string) {
    const selectedSeat = { seatNumber: seat.number, rowLetter: row };
    if (seat.selected) {
      this.selectedSeats.push(selectedSeat);
    } else {
      this.selectedSeats = this.selectedSeats.filter((savedSeat) => {
        const selectedSeatString = `${selectedSeat.rowLetter}${selectedSeat.seatNumber}`;
        const savedSeatString = `${savedSeat.rowLetter}${savedSeat.seatNumber}`;
        return selectedSeatString !== savedSeatString;
      });
    }
  }

  updateTickets(type: 'adult' | 'child' | 'senior', quantity: number) {
    this.selectedTickets[type] = this.selectedTickets[type] + quantity;
  }

  resetTickets() {
    this.selectedTickets['adult'] = 0;
    this.selectedTickets['child'] = 0;
    this.selectedTickets['senior'] = 0;
  }

  clearSelections() {
    this.selectedMovie = undefined;
    this.selectedScreening?.screening.seatRows.forEach((seatRow) =>
      seatRow.seats.forEach((seat) => (seat.selected = false))
    );
    this.selectedScreening = undefined;
    this.selectedSeats = [];
    this.selectedTickets = {
      adult: 0,
      child: 0,
      senior: 0,
    };
  }
}
