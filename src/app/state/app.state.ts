import { PeliculasState } from '@core/models/peliculas.state';
import { peliculasReducer } from './reducers/peliculas.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  peliculasState: PeliculasState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  peliculasState: peliculasReducer,
};
