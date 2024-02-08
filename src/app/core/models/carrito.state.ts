import { CarritoBoletosModel, CarritoCombosModel } from './Carrito.interface';

export interface CarritoState {
  boletos: ReadonlyArray<CarritoBoletosModel>;
  combos: ReadonlyArray<CarritoCombosModel>;
}
