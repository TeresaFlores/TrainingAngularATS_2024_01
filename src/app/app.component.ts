import { Component } from '@angular/core';
import { FoodService } from './services/food/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cinepolis';

  constructor(private foodService: FoodService) {}
}
