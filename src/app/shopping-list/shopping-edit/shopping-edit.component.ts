import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() selIngredient: Ingredient;
  @Output() deletedIngredient = new EventEmitter<Ingredient>();
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.addedIngredient.emit(this.selIngredient);
  }

  validIngredientInfo() {
    return (this.selIngredient && this.selIngredient.name !== '' && this.selIngredient.quantity > 0);
  }

  onDeleteIngredient() {
    this.deletedIngredient.emit(this.selIngredient);
  }

  onClearIngredient() {
    this.selIngredient = null;
  }
}
