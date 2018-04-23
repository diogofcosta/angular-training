import { Injectable } from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class LoggerService {

  constructor() { }

  onAddRecipe(recipe: Recipe) {
    console.log('A new recipe was added! ' + recipe.name);
  }

}
