import { createAction, props } from '@ngrx/store';
import {
  CarritoBoletosModel,
  CarritoCombosModel,
} from '@core/models/Carrito.interface';

export const agregarPelicula = createAction(
  '[Carrito] Agregar pelicula',
  props<{ payload: CarritoBoletosModel }>()
);

export const agregarCombo = createAction(
  '[Carrito] Agregar combo',
  props<{ payload: CarritoCombosModel }>()
);
