import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import { SelectedMovieService } from 'src/app/services/selectedMovie/selected-movie.service';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css']
})
export class BoletosComponent {

  listPeliculas: any[] = [];
  movie = {
    nombre: '',
    clas: '',
    categoria: '',
    idioma: '',
    duracion: '',
    img: '',
    horario: ''
  };

  cantidadNinos: number = 0;
  cantidadAdultos: number = 0;
  cantidadAdultosMayores: number = 0;
  costoNino: number = 45;
  costoAdulto: number = 60;
  costoAdultoMayor: number = 40;

  selectedCurrency: string = 'MXN'

  private movieSubscription!: Subscription;

  constructor(
    private selectedMovieService: SelectedMovieService,
    private pelisService: PeliculasService,

  ) {
    this.getDataMovieSelectes();
    console.log(this.movie)
  }

  ngOnInit(): void {
    this.movieSubscription = this.selectedMovieService.getSelectedMovie().subscribe((dataMovie: any) => {
      this.movie = dataMovie;
    });
    this.getPeliculas();
  }
  ngOnDestroy(): void {
    this.movieSubscription.unsubscribe(); // Unsubscribe when component is destroyed
  }

  getDataMovieSelectes() {
    this.selectedMovieService.getSelectedMovie().subscribe((dataMovie: any) => {
      this.movie = dataMovie;
    });
  }

  getPeliculas() {
    this.listPeliculas = this.pelisService.getDataMovies();
  }

  calcularTotal(): number {
    let total = (this.cantidadNinos * this.costoNino) +
                (this.cantidadAdultos * this.costoAdulto) +
                (this.cantidadAdultosMayores * this.costoAdultoMayor);
    return this.convertirMoneda(total);
  }

  borrarSeleccion() {
    this.cantidadNinos = 0;
    this.cantidadAdultos = 0;
    this.cantidadAdultosMayores = 0;
  }

  simularPago() {
    const totalPagar = this.calcularTotal();
    alert(`Se realizó el pago exitosamente por un total de ${this.selectedCurrency} ${totalPagar.toFixed(2)}`);
  }

  convertirMoneda(total: number): number {
    if (this.selectedCurrency === 'JPY') {
      return total * 110;
    } else if (this.selectedCurrency === 'USD') {
      return total * 20;
    }
    return total;
  }

  keys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
