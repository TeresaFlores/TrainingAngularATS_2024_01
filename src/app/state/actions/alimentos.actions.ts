import { createAction, props } from '@ngrx/store';
import { ComboModel, AlimentosModel } from '@core/models/Alimentos.interface';

export const cargarAlimentos = createAction(
  '[Lista Alimentos] Cargar Alimentos'
);

export const alimentosCargados = createAction(
  '[Lista Alimentos] Cargados correctamente',
  props<{ combos: ComboModel[] }>()
);
