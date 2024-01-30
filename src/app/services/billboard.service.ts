// billboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BillboardService {
  private openingTime: number = 11;
  private closingTime: number = 25;
  private movies: Movie[] | undefined;

  constructor(private http: HttpClient) { }

  /**
   * Initialize the billboard by fetching data from the JSON file.
   * @returns {Observable<boolean>} - Returns true if the initialization is successful, false otherwise.
   */
  initializeBillboard(): Observable<boolean> {
    return this.http.get<BillboardData>('assets/billboard.json').pipe(
      map((data: BillboardData) => {
        this.openingTime = data.openingTime;
        this.closingTime = data.closingTime;
        this.movies = data.movies;
        return true;
      }),
      catchError(() => {
        console.error('Error loading billboard data.');
        return [false];
      })
    );
  }

  /**
   * Generate a billboard for the movies based on the opening and closing times.
   * @returns {string} - The billboard string.
   */
  generateBillboard(): string {
    if (!this.movies || !this.openingTime || !this.closingTime) {
      console.error('Billboard data not initialized.');
      return '';
    }

    const lastShowTime = this.calculateLastShowTime();
    const billboard: string[] = [];

    // Add header
    billboard.push(`==== Today's Movie Schedule ====`);

    // Add movies to the billboard
    this.movies.forEach((movie, index) => {
      const showTime = this.calculateShowTime(index, lastShowTime);
      const movieInfo = `${movie.title} | Rating: ${movie.rating} | Duration: ${movie.duration} mins | Showtime: ${showTime}`;
      billboard.push(movieInfo);
    });

    // Add footer
    billboard.push(`================================`);

    return billboard.join('\n');
  }

  private calculateShowTime(movieIndex: number, lastShowTime: number): string {
    const minutesBetweenShows = 30; // Time gap between shows

    // Calculate showtime for each movie
    const showTimeMinutes = lastShowTime - movieIndex * minutesBetweenShows;

    // Format the showtime as HH:mm
    const hours = Math.floor(showTimeMinutes / 60);
    const minutes = showTimeMinutes % 60;

    return `${this.formatTime(hours)}:${this.formatTime(minutes)}`;
  }

  private calculateLastShowTime(): number {
    const closingTimeInMinutes = this.closingTime * 60;
    const lastShowTime = closingTimeInMinutes - 30; // Last show finishes 30 minutes before closing
    return lastShowTime;
  }

  private formatTime(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}

// Interfaces for types used in the service
interface Movie {
  title: string;
  rating: number;
  duration: number;
}

interface BillboardData {
  openingTime: number;
  closingTime: number;
  movies: Movie[];
}
