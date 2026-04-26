import { sample_foods, sample_tags } from '../../data';
import { Tag } from '../shared/models/Tag';
import { Food } from './../shared/models/Food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()) );
  }

  getFoodById(id: string): Food {
    return this.getAll().find(food => food.id === id) ?? new Food();
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }



}
