import { createReducer, on } from '@ngrx/store';
import {
  cargarAlimentos,
  alimentosCargados,
} from '../actions/alimentos.actions';
import { AlimentosState } from '@core/models/alimentos.state';

export const initialState: AlimentosState = { isLoading: false, combos: [] };

export const alimentosReducer = createReducer(
  initialState,
  on(cargarAlimentos, (state) => {
    return { ...state, isLoading: true };
  }),
  on(alimentosCargados, (state, { combos }) => {
    return { ...state, isLoading: false, combos };
  })
);
