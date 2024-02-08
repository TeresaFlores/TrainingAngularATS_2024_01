import { createSelector } from '@ngrx/store';
import { CarritoState } from '@core/models/carrito.state';
import { AppState } from '../app.state';

export const selectCarritoFeature = (state: AppState) => state.carritoState;

export const selectBoletos = createSelector(
  selectCarritoFeature,
  (state: CarritoState) => state.boletos
);
