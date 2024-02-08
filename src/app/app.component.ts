import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarAlimentos } from '@state/actions/alimentos.actions';
import { cargarPeliculas } from '@state/actions/peliculas.actions';
import { cargarPromos } from '@state/actions/promos.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(cargarPeliculas());
    this.store.dispatch(cargarPromos());
    this.store.dispatch(cargarAlimentos());
  }
}
