import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food';
import { RouterLink } from '@angular/router';
import { RatingModule } from '@khajegan/ng-starrating';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RatingModule, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  foods: Food[] = [];

  constructor(private foodService: FoodService) {
    this.foods = foodService.getAll();
  }
}
