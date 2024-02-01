import { createSelector } from '@ngrx/store';
import { PeliculasState } from '@core/models/peliculas.state';
import { AppState } from '../app.state';

export const selectPeliculasFeature = (state: AppState) => state.peliculasState;

export const selectListaPeliculas = createSelector(
  selectPeliculasFeature,
  (state: PeliculasState) => state.peliculas
);

export const selectLoading = createSelector(
  selectPeliculasFeature,
  (state: PeliculasState) => state.isLoading
);
