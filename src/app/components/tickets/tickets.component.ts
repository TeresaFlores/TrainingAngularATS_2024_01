import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class TicketsComponent implements OnInit {
  movies: MoviesService['movieAssets'] = [];
  currentMovie = 0;
  movie: MoviesService['movieAssets'][number] = {
    image: { cartel: '', wallpaper: '' },
    clasification: 'G',
    director: '',
    lengthTime: '',
    name: '',
    releaseYear: '',
    schedule: [],
    synopsis: '',
  };

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {
    this.movies = this.movieService.getMovies();
  }

  selectMovieSchedule(schedule: string, movieID: number): void {
    this.currentMovie = isNaN(Math.floor(+movieID)) ? 0 : Math.floor(+movieID);
    this.movie = this.movieService.getMovie(this.currentMovie);
    this.modalService.setSchedule(schedule);
    this.modalService.setMovie(this.movie.name);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(({ movieId }) => {
      this.currentMovie = isNaN(Math.floor(+movieId))
        ? 0
        : Math.floor(+movieId);
      this.movie = this.movieService.getMovie(this.currentMovie);
    });
    this.modalService.setSchedule(this.movie.schedule[0]);
    this.modalService.setMovie(this.movie.name);
  }
}
