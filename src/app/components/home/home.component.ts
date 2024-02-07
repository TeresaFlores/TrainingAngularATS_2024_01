import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentMovieIndex = 0;
  movies: MoviesService['movieAssets'] = [];

  constructor(private service: MoviesService, private router: Router) {
    this.movies = service.getMovies();
  }

  ngOnInit(): void {}

  nextMovie() {
    this.currentMovieIndex =
      this.currentMovieIndex >= this.movies.length - 1
        ? 0
        : ++this.currentMovieIndex;
  }

  prevMovie() {
    this.currentMovieIndex =
      this.currentMovieIndex <= 0 ? 0 : --this.currentMovieIndex;
  }

  newIndex(index: number) {
    this.currentMovieIndex = index;
  }
}
