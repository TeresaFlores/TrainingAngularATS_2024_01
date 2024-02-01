import { PeliculaModel } from './Pelicula.interface';

export interface PeliculasState {
  peliculas: ReadonlyArray<PeliculaModel>;
  isLoading: boolean;
}
