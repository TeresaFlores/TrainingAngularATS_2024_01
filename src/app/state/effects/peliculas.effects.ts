import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Injectable()
export class PeliculasEffects {
  constructor(
    private actions$: Actions,
    private peliculasService: PeliculasService
  ) {}

  cargarPeliculas$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Lista Peliculas] Cargar Peliculas'),
      mergeMap(() =>
        this.peliculasService.getDataApi().pipe(
          map((peliculas) => ({
            type: '[Lista Peliculas] Cargadas correctamente',
            peliculas,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
