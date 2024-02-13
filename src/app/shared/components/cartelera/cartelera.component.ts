import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../../interfaces/pelicula';
import { Subscription, catchError, of } from 'rxjs';
@Component({
  selector: 'shared-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.css']
})
export class CarteleraComponent implements OnInit, OnDestroy {
  public peliculas: Pelicula[] = [];
  public isLoading: boolean = false;
  private peliculasSubscription?: Subscription;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.peliculasSubscription = this.peliculasService.getData()
    .pipe(
      catchError(error => {
        console.log('Error al obtener las peliculas.', error);
        this.isLoading = false;
        return of([]);
      })
    )
    .subscribe((peliculas) => {
      this.peliculas = peliculas;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
      this.peliculasSubscription?.unsubscribe();
  }
}
