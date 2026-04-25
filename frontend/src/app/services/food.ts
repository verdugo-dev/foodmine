import { sample_foods } from '../../data';
import { Food } from './../shared/models/Food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  getAll(): Food[] {
    return sample_foods;
  }

}
