import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedMovieService {

  private selectedMovieSubject: BehaviorSubject<any> = new BehaviorSubject<any>({nombre: ''});

  constructor() { }

  setSelectedMovie(movie: any, horario: number) {
    const selectedMovie = {
      nombre: movie.nombre,
      clas: movie.clas,
      categoria: movie.categoria,
      idioma: movie.idioma,
      duracion: movie.duracion,
      img: movie.img,
      horario: horario
    };

    this.selectedMovieSubject.next(selectedMovie);
  }

  getSelectedMovie(): Observable<any> {
    return this.selectedMovieSubject.asObservable();
  }
}
