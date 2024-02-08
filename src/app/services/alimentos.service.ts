import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentosService {
  constructor() {}

  getDataApi(): Observable<any> {
    const data = {
      combos: [
        {
          id: 1,
          nombre: 'Combo Nachos',
          precio: 194,
          desc: '1 Palomitas para llevar, 1 refresco Jumbo, 1 Nachos clasicos',
          src: '../../../assets/images/alimentos/combo-nachos.jpeg',
        },
        {
          id: 2,
          nombre: 'Combo Clasico',
          precio: 194,
          desc: '1 Palomitas para llevar, 1 refresco Jumbo, 1 Hot dog',
          src: '../../../assets/images/alimentos/combo-clasico.jpeg',
        },
        {
          id: 3,
          nombre: 'Combo Cuates',
          precio: 203,
          desc: '1 Palomitas para llevar, 2 refrescos Jumbo',
          src: '../../../assets/images/alimentos/combo-cuates.jpeg',
        },
      ],
    };

    return of(data).pipe(delay(1500));
  }
}
