import { createSelector } from '@ngrx/store';
import { PromosState } from '@core/models/promos.state';
import { AppState } from '../app.state';

export const selectPromosFeature = (state: AppState) => state.promosState;

export const selectListaPromos = createSelector(
  selectPromosFeature,
  (state: PromosState) => state.promos
);

export const selectLoadingPromos = createSelector(
  selectPromosFeature,
  (state: PromosState) => state.isLoading
);
