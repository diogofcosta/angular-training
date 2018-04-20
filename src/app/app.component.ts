import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds: number[] = [];
  evens: number[] = [];

  onTimerIncremented(event: { timer: number }) {
    console.log('event caught! ' + event.timer);
    console.log(event.timer % 2);
    console.log(typeof(event.timer));
    console.log(typeof(2));
    console.log(typeof(event.timer % 2));
    // if it's an even number push it to the evens array, otherwise push it to the odds array
    (event.timer % 2) === 0 ? this.evens.push(event.timer) : this.odds.push(event.timer);

    console.log(this.evens);
    console.log(this.odds);
  }
}
