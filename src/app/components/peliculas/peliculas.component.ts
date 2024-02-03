import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListaPeliculas } from '@selectors/peliculas.selector';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  listaPeliculas$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listaPeliculas$ = this.store.select(selectListaPeliculas);
  }
}
