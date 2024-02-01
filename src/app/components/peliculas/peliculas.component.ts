import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import {
  selectListaPeliculas,
  selectLoading,
} from 'src/app/state/selectors/peliculas.selector';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  listaPeliculas$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.listaPeliculas$ = this.store.select(selectListaPeliculas);
  }
}
