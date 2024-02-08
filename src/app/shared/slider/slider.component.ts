import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieResult } from 'src/app/interfaces/movies.interface';
import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() movie?: MovieResult[];
  mySwiper?: Swiper;
  movies: MovieResult[] = [];
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: 250
    });
  }

  ngOnInit(): void {}

  onSliderPrev(){
    this.mySwiper?.slidePrev();
  }
  onSliderNext(){
    this.mySwiper?.slideNext();
  }

  OnMovieDetails(movie: MovieResult){
    this.router.navigate(['/movies', movie.id])
  }
}
