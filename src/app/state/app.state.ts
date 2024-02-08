import { PeliculasState } from '@core/models/peliculas.state';
import { peliculasReducer } from './reducers/peliculas.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { PromosState } from '@core/models/promos.state';
import { promosReducer } from './reducers/promos.reducer';
import { CarritoState } from '@core/models/carrito.state';
import { carritoReducer } from './reducers/carrito.reducer';
import { AlimentosState } from '@core/models/alimentos.state';
import { alimentosReducer } from './reducers/alimentos.reducer';

export interface AppState {
  peliculasState: PeliculasState;
  promosState: PromosState;
  carritoState: CarritoState;
  alimentosState: AlimentosState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  peliculasState: peliculasReducer,
  promosState: promosReducer,
  carritoState: carritoReducer,
  alimentosState: alimentosReducer,
};
