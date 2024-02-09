import { createAction, props } from '@ngrx/store';
import { CarritoCombosModel } from '@core/models/Carrito.interface';

export const agregarCombo = createAction(
  '[Carrito] Agregar combo',
  props<{ payload: CarritoCombosModel }>()
);

export const pagarCarrito = createAction('[Carrito] Pagar Carrito');
