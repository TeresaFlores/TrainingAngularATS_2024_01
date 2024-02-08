import { createSelector } from '@ngrx/store';
import { CarritoState } from '@core/models/carrito.state';
import { AppState } from '../app.state';

export const selectCarritoFeature = (state: AppState) => state.carritoState;

export const selectCombos = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => state.combos
);

export const totalItems = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => state.combos.length
);
