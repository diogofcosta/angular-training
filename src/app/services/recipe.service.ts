import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {LoggerService} from './logger.service';

@Injectable()
export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [  // signaling TS that this array will only ever store objects of type Recipe (our model)
    new Recipe('Bacon and Eggs', 'Delicious combination of flavours!', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg'),
    new Recipe('Smoked Ribs', 'Heavenly food!', 'https://c1.staticflickr.com/3/2584/3978168591_177183e515_z.jpg'),
    new Recipe('Bacon and Eggs', 'Delicious combination of flavours!', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  constructor(private logger: LoggerService) { }

  get recipes(): Recipe[] {
    return this._recipes.slice(); // so we really can't access it from outside
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.logger.onAddRecipe(recipe);
  }

}
