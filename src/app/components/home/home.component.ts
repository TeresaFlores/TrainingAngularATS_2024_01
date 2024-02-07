import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarPeliculas } from '@state/actions/peliculas.actions';
import { cargarPromos } from '@state/actions/promos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
