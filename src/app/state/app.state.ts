import { PeliculasState } from '@core/models/peliculas.state';
import { peliculasReducer } from './reducers/peliculas.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { PromosState } from '@core/models/promos.state';
import { promosReducer } from './reducers/promos.reducer';

export interface AppState {
  peliculasState: PeliculasState;
  promosState: PromosState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  peliculasState: peliculasReducer,
  promosState: promosReducer,
};
