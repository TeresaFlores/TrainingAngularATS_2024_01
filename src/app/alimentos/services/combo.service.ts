import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Combo } from '../interfaces/combo.interface';

@Injectable({
    providedIn: 'root'
})
export class ComboService {
    private apiUrl: string = 'assets/alimentos/alimentos.json';

    constructor(private http: HttpClient) { }

    // GET
    public getCombo(id: string): Observable<Combo | null> {
        return this.http.get<Combo[]>(`${this.apiUrl}`)
            .pipe(
                map(combos => combos.find(combo => combo.id === id) || null),
                catchError(error => {
                    console.log('Error al obtener el combo.', error);
                    return of(null);
                })
            );
    }

    public getData(): Observable<Combo[]> {
        return this.http.get<Combo[]>(`${this.apiUrl}`)
            .pipe(
                catchError(error => {
                    console.log('Error al obtener los combos.', error);
                    return of([]);
                }),
            );
    }
}