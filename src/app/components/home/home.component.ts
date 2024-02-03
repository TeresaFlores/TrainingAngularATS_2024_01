import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarPeliculas } from '@state/actions/peliculas.actions';
import { cargarPromos } from '@state/actions/promos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(cargarPeliculas());
    this.store.dispatch(cargarPromos());
  }
}
