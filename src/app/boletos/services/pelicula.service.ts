import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Pelicula } from 'src/app/shared/interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl: string = 'assets/peliculas/peliculas.json';

  constructor(private http: HttpClient) { }

  public getPelicula(id: string): Observable<Pelicula | null> {
    return this.http.get<Pelicula[]>(`${this.apiUrl}`)
    .pipe(
      map(peliculas => peliculas.find(pelicula => pelicula.id === id) || null),
        catchError( error => {
            console.log('Error al obtener la pelicula.', error);
            return of(null);
        })
    );
}
}
