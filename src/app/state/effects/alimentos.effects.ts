import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { AlimentosService } from 'src/app/services/alimentos.service';

@Injectable()
export class AlimentosEffects {
  constructor(
    private actions$: Actions,
    private alimentosService: AlimentosService
  ) {}

  cargarAlimentos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Lista Alimentos] Cargar Alimentos'),
      mergeMap(() =>
        this.alimentosService.getDataApi().pipe(
          map((alimentos) => ({
            type: '[Lista Alimentos] Cargados correctamente',
            combos: alimentos['combos'],
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
