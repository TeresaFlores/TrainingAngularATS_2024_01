import { ComboModel } from './Alimentos.interface';
import { PeliculaModel } from './Pelicula.interface';

export interface CarritoCombosModel {
  comboInfo: ComboModel | null;
  cantidad: number;
  total: number;
}
