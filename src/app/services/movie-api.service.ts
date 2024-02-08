import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResult, MoviesResponse } from '../interfaces/movies.interface';
import { HttpClient } from '@angular/common/http';
import { ServerAPIOptions } from '../interfaces/apiOptions.interfaces';
import { map } from 'rxjs/operators';
import { MovieTopRatedResult, TopRatedMovies } from '../interfaces/topRated.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private serverOptions: ServerAPIOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTUxZTc2MGQyZDJlZmQ1YjNjZmJiZTZmNjU5MGQ4NCIsInN1YiI6IjY1YzNlMjVjMmI4YTQzMDE0NzM5ZGQyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oV74S9HLnvOkElqf8xaWdKtcsB689e0igETWZ_CiPaw',
    },
  };

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieResult[]> {
    const response = this.http
      .get<MoviesResponse>(
        'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
        this.serverOptions
      )
      .pipe(map((res) => res.results));
    return response;
  }

  getTopRatedMovies(): Observable<MovieTopRatedResult[]>{
    const response = this.http
    .get<TopRatedMovies>(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      this.serverOptions
    )
    .pipe(map((res) => res.results))
    return response
  }
}
