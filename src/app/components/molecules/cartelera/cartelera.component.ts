import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CinesService } from 'src/app/services/cines/cines.service';
import { SelectedMovieService } from 'src/app/services/selectedMovie/selected-movie.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent {
  @Input() listMovies!: any[];

  max: number = 24;
  min: number = 8
  valueStart = this.min;
  valueEnd = this.max;

  listCines: any[] = [];

  constructor(
    private cineService: CinesService,
    private selectedMovieService: SelectedMovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCines();
  }

  getCines() {
    this.listCines = this.cineService.getDataCines();
  }

  onClick(movie: any[], horario: number) {
    this.selectedMovieService.setSelectedMovie(movie, horario);
    this.router.navigate(['/boletos']);
  }
}
