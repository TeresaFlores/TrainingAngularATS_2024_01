import { ComboModel } from './Alimentos.interface';
import { PeliculaModel } from './Pelicula.interface';

export interface CarritoBoletosModel {
  peliculaInfo: PeliculaModel | null;
  funcion: string | null;
  adulto: number;
  nino: number;
  eraEdad: number;
}

export interface CarritoCombosModel {
  comboInfo: ComboModel | null;
  cantidad: number;
  total: number;
}
