import {UsersService} from './users.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CounterService {
  movesToInactive = 0;
  movesToActive = 0;

  constructor(private usersService: UsersService) {
    this.usersService.moveTo.subscribe(
      (which: string) => {
        console.log('a move to: ' + which);
        (which === 'active') ? this.movesToActive++ : this.movesToInactive++;
        console.log(`moves to active: ${this.movesToActive} - moves to inactive: ${this.movesToInactive}`);
      }
    );
  }
}
