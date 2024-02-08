import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  activeTab: string = 'released';

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        this.activeTab = frag;
      }
    });
  }

  get movies() {
    return this.activeTab === 'released'
      ? this.releasedMovies
      : this.upcomingMovies;
  }

  get releasedMovies() {
    return this.moviesService.movies.filter(
      (movie) => movie.status === 'released'
    );
  }

  get upcomingMovies() {
    return this.moviesService.movies.filter(
      (movie) => movie.status === 'upcoming'
    );
  }

  get isReleasedActive() {
    return this.activeTab === 'released';
  }

  get isUpcomingActive() {
    return this.activeTab === 'upcoming';
  }
}
