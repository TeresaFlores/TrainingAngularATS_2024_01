import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaService } from '../../services/pelicula.service';
import { Subscription, catchError, of, switchMap } from 'rxjs';
import { Pelicula } from 'src/app/shared/interfaces/pelicula';
import { CarritoService } from 'src/app/carrito/services/carrito.service';

@Component({
  selector: 'movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit, OnDestroy {
  public pelicula?: Pelicula;
  public isLoading: boolean = false;
  private peliculaSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculaService,
    private router: Router,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.peliculaSubscription = this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.peliculaService.getPelicula(id)),
      catchError(error => {
        console.error('Pelicula no encontrada', error);
        this.isLoading = false;
        return of(null);
      })
    )
    .subscribe((pelicula) => {
      this.isLoading = false;
      if(!pelicula){
        this.router.navigateByUrl('');
      } else {
        this.pelicula = pelicula;
      }
    });
  }

  agregarPelicula(pelicula: Pelicula) {
    this.carritoService.agregarPelicula(pelicula);
    console.log('Pelicula agregada al carrito', pelicula);
  }

  ngOnDestroy(): void {
    this.peliculaSubscription?.unsubscribe();
  }
}