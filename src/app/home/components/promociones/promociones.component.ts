import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'home-promociones',
  standalone: true,
  imports: [NgbCarouselModule, NgIf],
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent {
  images = ["assets/promos/1.png", "assets/promos/9.jpeg"];
}
