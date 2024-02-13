import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieByIdResponse } from 'src/app/interfaces/movieById.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  idMovie?: any;
  movie?: MovieByIdResponse;
  selected?: string;
  constructor(private movieById: MovieApiService, private router: Router) {}

  ngOnInit(): void {
    this.idMovie = this.router?.parseUrl(this.router?.url)?.queryParams['id'];
    this.selected = this.router?.parseUrl(this.router?.url)?.queryParams[
      'selected'
    ];
    this.movieById.getMovieById(this?.idMovie).subscribe((res) => {
      this.movie = res;
      console.log('Movie: ', res);
    });
  }
}
