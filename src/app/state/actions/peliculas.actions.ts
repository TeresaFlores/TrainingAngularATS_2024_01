import { createAction, props } from '@ngrx/store';
import { PeliculaModel } from '@core/models/Pelicula.interface';

export const cargarPeliculas = createAction(
  '[Lista Peliculas] Cargar Peliculas'
);

export const peliculasCargadas = createAction(
  '[Lista Peliculas] Cargadas correctamente',
  props<{ peliculas: PeliculaModel[] }>()
);
