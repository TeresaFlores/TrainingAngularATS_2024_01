import { createReducer, on } from '@ngrx/store';
import {
  cargarPeliculas,
  peliculasCargadas,
} from '../actions/peliculas.actions';
import { PeliculasState } from '@core/models/peliculas.state';

export const initialState: PeliculasState = { isLoading: false, peliculas: [] };

export const peliculasReducer = createReducer(
  initialState,
  on(cargarPeliculas, (state) => {
    return { ...state, isLoading: true };
  }),
  on(peliculasCargadas, (state, { peliculas }) => {
    return { ...state, isLoading: false, peliculas };
  })
);
