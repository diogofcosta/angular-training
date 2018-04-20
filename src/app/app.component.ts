import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  viewRecipes = true;

  showRecipes() {
    this.viewRecipes = true;
  }

  showShopping() {
    this.viewRecipes = false;
  }
}
