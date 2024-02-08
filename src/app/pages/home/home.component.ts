import { Component, OnInit } from '@angular/core';
import { MovieResult } from 'src/app/interfaces/movies.interface';
import { MovieTopRatedResult } from 'src/app/interfaces/topRated.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movie: MovieResult[]=[];
  topRatedMoviesResult: MovieTopRatedResult[]=[];
  movieSwiper: MovieResult[] = [];

  constructor(private movies: MovieApiService, private topRatedMovies: MovieApiService){}
  ngOnInit(): void {
    this.movies.getMovies().subscribe((res) => {
      this.movieSwiper = res;
      this.movie = res;
    })
    this.topRatedMovies.getTopRatedMovies().subscribe((res) => {
      this.topRatedMoviesResult = res;
    })
  }
}

