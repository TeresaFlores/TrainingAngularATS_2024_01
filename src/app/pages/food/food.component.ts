import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';
import { FoodItem } from 'src/app/services/food/utils';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {
  selectedItem: FoodItem | undefined;

  constructor(private foodService: FoodService) {}

  get foods() {
    return this.foodService.foods;
  }

  selectItem(item: FoodItem) {
    this.selectedItem = item;
  }

  clearItemSelected() {
    this.selectedItem = undefined;
  }
}
