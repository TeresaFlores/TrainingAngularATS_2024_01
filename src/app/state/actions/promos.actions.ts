import { createAction, props } from '@ngrx/store';
import { PromosModel } from '@core/models/Promos.interface';

export const cargarPromos = createAction('[Lista Promos] Cargar Promos');

export const promosCargadas = createAction(
  '[Lista Promos] Cargadas correctamente',
  props<{ promos: PromosModel[] }>()
);
