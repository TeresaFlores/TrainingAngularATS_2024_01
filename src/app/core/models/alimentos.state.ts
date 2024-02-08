import { AlimentosModel, ComboModel } from "./Alimentos.interface";

export interface AlimentosState {
    combos: ReadonlyArray<ComboModel>;
    isLoading: boolean;
}