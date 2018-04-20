import {Component, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  timer: number;
  intervalRef;
  intervalSet: boolean;
  // timerIncremented event with data type that's specified
  @Output() timerIncremented = new EventEmitter<{timer: number}>();

  constructor() {
    this.timer = 0;
    this.intervalSet = false;
  }

  ngOnInit() {
  }

  onStartGame() {
    if (!this.intervalSet) {
      this.intervalSet = true;
      this.intervalRef = setInterval(() => {
        this.timerIncremented.emit({timer: ++this.timer});
      }, 1000);
    }
  }

  onStopGame() {
    this.intervalSet = false;
    clearInterval(this.intervalRef);
  }
}
