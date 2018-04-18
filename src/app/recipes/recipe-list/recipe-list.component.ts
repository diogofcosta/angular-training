import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [  // signaling TS that this array will only ever store objects of type Recipe (our model)
    new Recipe('Bacon and Eggs', 'Delicious combination of flavours!', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Smoked Ribs', 'Heavenly food!', 'https://c1.staticflickr.com/3/2584/3978168591_177183e515_z.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
