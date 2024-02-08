import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { PromosService } from '@services/promos.service';

@Injectable()
export class PromosEffects {
  constructor(
    private actions$: Actions,
    private promosService: PromosService
  ) {}

  cargarPromos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Lista Promos] Cargar Promos'),
      mergeMap(() =>
        this.promosService.getDataApi().pipe(
          map((promos) => ({
            type: '[Lista Promos] Cargadas correctamente',
            promos,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
