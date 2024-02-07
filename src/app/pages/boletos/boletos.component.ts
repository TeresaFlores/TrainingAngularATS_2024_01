import { Component } from '@angular/core';
import { SelectedMovieService } from 'src/app/services/selectedMovie/selected-movie.service';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent {
  movie = {
    nombre: '',
    clas: '',
    categoria: '',
    idioma: '',
    duracion: '',
    horarios: []
  };

  constructor(private selectedMovieService: SelectedMovieService) {
    console.log(this.movie)
    this.getDataMovieSelectes();
  }

  getDataMovieSelectes() {
    this.movie = this.selectedMovieService.getSelectedMovie()
  }

}
