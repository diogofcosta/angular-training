import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('user init!');
    console.log(this.currentRoute);
    this.user = {
      id: this.currentRoute.snapshot.params['id'],
      name: this.currentRoute.snapshot.params['name']
    };
    // subscribe to changes on params and react to it
    this.currentRoute.params.subscribe(
      (newParams: Params) => { this.user.id = newParams.id; this.user.name = newParams.name; }
    );
  }

}
