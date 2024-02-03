import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromosService {
  constructor() {}

  getDataApi(): Observable<any> {
    const data = [
      {
        id: 1,
        aria: 'Promo 1',
        src: '../../../assets/images/promociones/promo.jpg',
      },
      {
        id: 2,
        aria: 'Promo 2',
        src: '../../../assets/images/promociones/adulto-mayor.jpg',
      },
      {
        id: 3,
        aria: 'Promo 3',
        src: '../../../assets/images/promociones/jueves.png',
      },
      {
        id: 4,
        aria: 'Promo 4',
        src: '../../../assets/images/promociones/lunes-popular.jpg',
      },
      {
        id: 5,
        aria: 'Promo 5',
        src: '../../../assets/images/promociones/miercoles.jpg',
      },
    ];
    return of(data).pipe(delay(1500));
  }
}
