import { createSelector } from '@ngrx/store';
import { AlimentosState } from '@core/models/alimentos.state';
import { AppState } from '@state/app.state';

export const selectAlimentosFeature = (state: AppState) => state.alimentosState;

export const selectListaAlimentos = createSelector(
  selectAlimentosFeature,
  (state: AlimentosState) => state.combos
);

export const selectCombo = (comboId: number) =>
  createSelector(selectListaAlimentos, (combos) =>
    combos.find((combo) => combo.id === comboId)
  );
