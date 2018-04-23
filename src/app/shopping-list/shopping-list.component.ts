import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  selectedIngredient: Ingredient;

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  onDeletedIngredient(ingredient: Ingredient) {
    this.shoppingListService.removeIngredient(ingredient);
  }

  onSelectedIngredient(currIngredient: Ingredient) {
    this.selectedIngredient = currIngredient;
  }
}
