import { PromosModel } from './Promos.interface';

export interface PromosState {
  promos: ReadonlyArray<PromosModel>;
  isLoading: boolean;
}
