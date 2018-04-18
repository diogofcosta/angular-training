import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent = true;
  buttonClicks = [];

  toggleShowContent() {
    this.showContent = !this.showContent;
    this.buttonClicks.push(`${this.buttonClicks.length+1} - Button clicked!`);
  }

  getColor(index) {
    return index >= 5 ? 'blue' : 'transparent';
  }
}
