import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipesClicked = new EventEmitter();
  @Output() shoppingClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickRecipes() {
    this.recipesClicked.emit();
  }

  onClickShopping() {
    this.shoppingClicked.emit();
  }
}
