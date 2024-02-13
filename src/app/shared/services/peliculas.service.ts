import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula';

@Injectable({
    providedIn: 'root'
})
export class PeliculasService {
    private apiUrl: string = 'assets/peliculas/peliculas.json';

    constructor(private http: HttpClient) { }

    // GET
    public getData(): Observable<Pelicula[]> {
        return this.http.get<Pelicula[]>(`${this.apiUrl}`)
        .pipe(
            catchError( error => {
                console.log('Error al obtener las peliculas.', error);
                return of([]);
            }),
        );
    }
}