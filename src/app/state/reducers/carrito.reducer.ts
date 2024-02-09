import { createReducer, on } from '@ngrx/store';
import { agregarCombo, pagarCarrito } from '@state/actions/carrito.actions';
import { CarritoState } from '@core/models/carrito.state';

export const initialState: CarritoState = {
  combos: [],
};

export const carritoReducer = createReducer(
  initialState,
  on(agregarCombo, (state, { payload }) => {
    const mergeCombos = [...state.combos, payload];
    return { ...state, combos: mergeCombos };
  }),
  on(pagarCarrito, () => ({ combos: [] }))
);
