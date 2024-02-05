import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent {
  @Input() listMovies!: any[]

  customOptions: OwlOptions = {
    autoWidth: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
    },
    nav: true
  }

  slidesStore = [
    {id: "1", src: 'assets/img1.jpg', alt: 'Imagen 1', title: 'Imagen 1'},
    {id: "2", src: 'assets/img2.jpg', alt: 'Imagen 2', title: 'Imagen 2'},
    {id: "3", src: 'assets/img3.jpg', alt: 'Imagen 3', title: 'Imagen 3'},
    {id: "4", src: 'assets/img7.jpg', alt: 'Imagen 4', title: 'Imagen 7'},
  ]
}
