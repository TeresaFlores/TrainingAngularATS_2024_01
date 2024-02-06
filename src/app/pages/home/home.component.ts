import { Component } from '@angular/core';
import { ComidaService } from 'src/app/services/comida/comida.service';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listPeliculas: any[] = [];
  listEstrenos: any[] = [];
  listCombos: any[] = [];

  constructor(
    private pelisService: PeliculasService,
    private combosService: ComidaService,
  ) {}

  ngOnInit(): void {
    this.getPeliculas();
    this.getEsternos();
    this.getCombosPyR();
  }

  getPeliculas() {
    this.listPeliculas = this.pelisService.getDataMovies();
  }

  getEsternos() {
    this.listEstrenos = this.pelisService.getDataEstrenos();
  }

  getCombosPyR() {
    this.listCombos = this.combosService.getDataCombos();
  }
}
