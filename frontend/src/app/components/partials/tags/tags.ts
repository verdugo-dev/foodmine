import { Component } from '@angular/core';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [RouterLink],
  templateUrl: './tags.html',
  styleUrl: './tags.css',
})
export class Tags {

  tags?: Tag[];

  constructor(private foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }

}
