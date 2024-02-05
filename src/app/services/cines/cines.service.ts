import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  constructor() { }

  getDataCines(): Observable<any> {
    const data = [
      {
        id: 1,
        nombre: 'Cine Antea Querétaro'
      },
      {
        id: 2,
        nombre: 'Cine Citadina Corregidora',
      },
      {
        id: 3,
        nombre: 'Cine Esfera Querétaro',
      },
      {
        id: 4,
        nombre: 'Cine Juriquilla Uptown',
      },
      {
        id: 5,
        nombre: 'Cine La Victoria',
      },
      {
        id: 6,
        nombre: 'Cine Peñaflor',
      },
      {
        id: 7,
        nombre: 'Cine Plaza del Parque',
      },
      {
        id: 8,
        nombre: 'Cine Plaza Las Américas',
      },
      {
        id: 9,
        nombre: 'Cine Plaza Pabellón Campestre',
      },
      {
        id: 10,
        nombre: 'Cine Sendero Querétaro',
      },{
        id: 11,
        nombre: 'Cine VIP Antea Querétaro',
      },{
        id: 12,
        nombre: 'Cine VIP Esfera Querétaro',
      },{
        id: 13,
        nombre: 'Cine VIP La Victoria',
      },
      {
        id: 14,
        nombre: 'Cine Xtreme Zaragoza',
      },
    ];



    return of(data).pipe(delay(1500));
  }
}
