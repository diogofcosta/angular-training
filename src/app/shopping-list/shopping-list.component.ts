import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: Ingredient;

  ingredients: Ingredient[] = [
    new Ingredient('Egg', 5),
    new Ingredient('Tomato', 10),
    new Ingredient('Chocolate Bar', 1)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddedIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onDeletedIngredient(ingredient: Ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }

  onSelectedIngredient(currIngredient: Ingredient) {
    this.selectedIngredient = currIngredient;
  }
}
