import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/interfaces/movies.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {
  @Input() movie?: MovieResult[];
  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  OnMovieDetails(movie: MovieResult){
    console.log("movie: ", movie);
    this.router.navigate(['/movies', movie.id])
  }

}
