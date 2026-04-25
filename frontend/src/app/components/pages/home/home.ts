import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RatingModule } from '@khajegan/ng-starrating';
import { CurrencyPipe } from '@angular/common';
import { Search } from '../../partials/search/search';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RatingModule, CurrencyPipe, Search],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);

      } else {
        this.foods = foodService.getAll();

      }
    });
  }

}
