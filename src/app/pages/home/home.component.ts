import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listPeliculas: any[] = [];
  listEstrenos: any[] = [];

  constructor(private pelisService: PeliculasService) {}

  ngOnInit(): void {
    this.getPeliculas();
    this.getEsternos();
  }

  getPeliculas() {
    this.listPeliculas = this.pelisService.getDataMovies();
  }

  getEsternos() {
    this.listEstrenos = this.pelisService.getDataEstrenos();
  }
}
