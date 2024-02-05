import { Component } from '@angular/core';
import { CinesService } from 'src/app/services/cines/cines.service';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent {

  max: number = 24;
  min: number = 8
  valueStart = this.min;
  valueEnd = this.max;

  listCines: any[] = [];

  constructor(private cineService: CinesService) {}

  ngOnInit(): void {
    this.getCines();
  }

  getCines() {
    this.listCines = this.cineService.getDataCines();
  }
}
