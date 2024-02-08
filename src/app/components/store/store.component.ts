import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreCombo, StoreFood } from 'src/app/interfaces';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class StoreComponent implements OnInit {
  combos: StoreCombo[] = [];
  popcorn: StoreFood[] = [];
  soda: StoreFood[] = [];
  food: StoreFood[] = [];

  comboQty: number[] = [];
  popcornQty: number[] = [];
  sodaQty: number[] = [];
  foodQty: number[] = [];

  currency: 'USD' | 'EUR' | 'MXN' = 'MXN';

  constructor(private foodService: StoreService) {
    this.combos = this.foodService.getCombos();
    this.popcorn = this.foodService.getPopcorns();
    this.food = this.foodService.getFood();
    this.soda = this.foodService.getSodas();
  }

  ngOnInit(): void {
    this.setDefaultComboQty();
    this.setDefaultFoodQty();
    this.setDefaultPopcornQty();
    this.setDefaultSodaQty();
  }

  setDefaultComboQty() {
    this.combos.forEach(() => {
      this.comboQty.push(1);
    });
  }
  setDefaultPopcornQty() {
    this.popcorn.forEach(() => {
      this.popcornQty.push(1);
    });
  }
  setDefaultSodaQty() {
    this.soda.forEach(() => {
      this.sodaQty.push(1);
    });
  }
  setDefaultFoodQty() {
    this.food.forEach(() => {
      this.foodQty.push(1);
    });
  }
}
