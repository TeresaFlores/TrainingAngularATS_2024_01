import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedMovieService {

  selectedMovie: any = {
    nombre: '',
    clas: '',
    categoria: '',
    idioma: '',
    duracion: '',
    horarios: []
  };;

  constructor() { }

  setSelectedMovie(movie: any) {
    this.selectedMovie = movie;
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }
}
