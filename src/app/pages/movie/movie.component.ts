import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { convertToHyphens, convertToSpaces } from 'src/app/utils/utils';
import { getFirstFiveDays, getScreeningsForTheDay } from './utils';

import {
  FormattedDate,
  Movie,
  ScreeningDate,
  ScreeningTimeByLocation,
} from 'src/app/services/movies/utils';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movie: Movie | undefined;
  activeDay: Date | undefined;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const selectedMovie = this.moviesService.movies.find((movie) => {
        return movie.name.toLowerCase() === convertToSpaces(params['id']);
      });

      if (!selectedMovie) {
        this.router.navigate(['/error']);
      } else {
        this.movie = selectedMovie;
        this.activeDay = selectedMovie.showTimes[0].date;
      }
    });
  }

  changeActiveDay(day: FormattedDate) {
    this.activeDay = day.date;
  }

  selectScreening(
    movie: Movie | undefined,
    screening: ScreeningTimeByLocation,
    screeningDate: ScreeningDate
  ) {
    if (movie) {
      this.moviesService.clearSelections();
      this.moviesService.setSelectedMovie(movie);
      this.moviesService.setSelectedScreening({
        screening,
        screeningDate: screeningDate,
      });
      this.router.navigate([
        `/movies/${convertToHyphens(movie.name.toLowerCase())}/tickets`,
      ]);
    }
  }

  get screeningDays() {
    return this.activeDay && this.movie
      ? getFirstFiveDays(this.activeDay, this.movie.showTimes)
      : [];
  }

  get screeningTimes() {
    return this.activeDay && this.movie
      ? getScreeningsForTheDay(this.activeDay, this.movie.showTimes)
      : [];
  }
}
