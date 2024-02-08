export interface ComboModel {
  id: number;
  nombre: string;
  precio: number;
  desc: string;
  src: string;
}

export interface AlimentosModel {
  combos: ComboModel[];
}
