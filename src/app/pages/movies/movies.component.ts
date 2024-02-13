import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieByIdResponse } from 'src/app/interfaces/movieById.interface';
import { MovieResult } from 'src/app/interfaces/movies.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movie?: MovieByIdResponse;
  idMovie?: number;

  constructor(private movieById: MovieApiService, private router: Router) {}

  ngOnInit(): void {
    this.idMovie = this.router?.parseUrl(this.router?.url)?.queryParams['id'];

    this.movieById.getMovieById(this?.idMovie).subscribe((res) => {
      this.movie = res;
    });
  }

  GoToBuyTicket(movie: any, hour: any) {
    this.router.navigate(['/tickets/booking'], {
      queryParams: { id: movie.id, selected: hour },
    });
  }
}
