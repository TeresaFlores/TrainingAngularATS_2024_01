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
        type: 'carta',
        detalle: 'Refresco de 333 mililitros.'
      },
      {
        id: 2,
        nombre: 'Refresco grande',
        img: '../../../assets/combos/refresco-g.png',
        price: 70,
        type: 'carta',
        detalle: 'Refresco de 700 mililitros.'
      },
      {
        id: 3,
        nombre: 'Palomitas pequeñas',
        img: '../../../assets/combos/palomitas-p.png',
        price: 80,
        type: 'carta',
        detalle: 'Palomitas sabor mantequilla de tamaño pequeño.'
      },
      {
        id: 4,
        nombre: 'Palomitas grandes',
        img: '../../../assets/combos/palomitas-g.png',
        price: 110,
        type: 'carta',
        detalle: 'Palomitas sabor mantequilla de tamaño grande.'
      },
      {
        id: 5,
        nombre: 'Combo grande',
        img: '.../../../assets/combos/combo1.png',
        price: 150,
        type: 'combo',
        detalle: 'Palomitas sabor mantequilla de tamaño grande y Refresco de 700 mililitros.'
      },
      {
        id: 6,
        nombre: 'Combo pequeño',
        img: '.../../../assets/combos/combo2.jpg',
        price: 115,
        type: 'combo',
        detalle: 'Palomitas sabor mantequilla de tamaño pequeño y Refresco de 333 mililitros.'
      },
    ];
  }
}
