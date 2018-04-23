import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('quantityInput') quantityInputElement: ElementRef;
  @ViewChild('nameInput') nameInputElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputElement.nativeElement.value, this.quantityInputElement.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
