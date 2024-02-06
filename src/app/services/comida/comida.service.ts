import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor() { }

  getDataCombos() {
    return [
      {
        id: 1,
        nombre: 'Refresco pequeño',
        img: '../../../assets/combos/refresco-p.png',
        price: 45,
      },
      {
        id: 2,
        nombre: 'Refresco grande',
        img: '../../../assets/combos/refresco-g.png',
        price: 70,
      },
      {
        id: 3,
        nombre: 'Palomitas pequeñas',
        img: '../../../assets/combos/palomitas-p.png',
        price: 80,
      },
      {
        id: 4,
        nombre: 'Palomitas grandes',
        img: '../../../assets/combos/palomitas-g.png',
        price: 110,
      },
      {
        id: 5,
        nombre: 'Combo grande',
        img: '.../../../assets/combos/combo1.png',
        price: 150,
      },
      {
        id: 6,
        nombre: 'Combo pequeño',
        img: '.../../../assets/combos/combo2.jpg',
        price: 115,
      },
    ];
  }
}
