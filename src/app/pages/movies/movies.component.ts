import { Component, OnInit } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { MovieByIdResponse } from 'src/app/interfaces/movieById.interface';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie?: MovieByIdResponse;
  idMovie?: any;

  constructor(private movieById: MovieApiService, private router: Router) {}

  ngOnInit(): void { 
    this.idMovie = this.router?.parseUrl(this.router?.url)?.queryParams['id']
    this.movieById.getMovieById(this?.idMovie).subscribe((res) => {
      this.movie = res
      console.log("movie: ", res);
    })
  }
 
}
