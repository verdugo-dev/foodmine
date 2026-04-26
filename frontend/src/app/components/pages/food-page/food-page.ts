import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food';
import { RatingModule } from '@khajegan/ng-starrating';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-food-page',
  imports: [RatingModule, RouterLink, CurrencyPipe,CommonModule],
  templateUrl: './food-page.html',
  styleUrl: './food-page.css',
})
export class FoodPage {

  food!: Food;

  constructor(activatedRoute: ActivatedRoute, private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = this.foodService.getFoodById(params.id);
      }
    })
  }

}
