import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from '@core/models/Pelicula.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {
  cargarPeliculas,
  peliculasCargadas,
} from 'src/app/state/actions/peliculas.actions';
import { selectLoading } from 'src/app/state/selectors/peliculas.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listaPeliculas: PeliculaModel[] = [];

  constructor(
    private store: Store<any>,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(cargarPeliculas());
    this.peliculasService
      .getDataApi()
      .subscribe((response: PeliculaModel[]) => {
        this.store.dispatch(peliculasCargadas({ peliculas: response }));
      });
  }
}
