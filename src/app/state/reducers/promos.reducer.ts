import { createReducer, on } from '@ngrx/store';
import { cargarPromos, promosCargadas } from '../actions/promos.actions';
import { PromosState } from '@core/models/promos.state';

export const initialState: PromosState = { isLoading: false, promos: [] };

export const promosReducer = createReducer(
  initialState,
  on(cargarPromos, (state) => {
    return { ...state, isLoading: true };
  }),
  on(promosCargadas, (state, { promos }) => {
    return { ...state, isLoading: false, promos };
  })
);
