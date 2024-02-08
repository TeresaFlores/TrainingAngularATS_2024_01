import { createReducer, on } from '@ngrx/store';
import { agregarCombo, agregarPelicula } from '@state/actions/carrito.actions';
import { CarritoState } from '@core/models/carrito.state';

export const initialState: CarritoState = {
  boletos: [],
  combos: [],
};

export const carritoReducer = createReducer(
  initialState,
  on(agregarPelicula, (state, { payload }) => {
    const prevBoletos = [
      ...state.boletos.filter(
        (boleto) => boleto?.peliculaInfo?.id !== payload?.peliculaInfo?.id
      ),
      payload,
    ];
    return { ...state, boletos: prevBoletos };
  }),
  on(agregarCombo, (state, { payload }) => {
    const mergeCombos = [...state.combos, payload];
    return { ...state, combos: mergeCombos };
  })
);
