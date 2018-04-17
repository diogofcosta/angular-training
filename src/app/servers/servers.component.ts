import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', //as a normal component
  // selector: '[app-servers]', // as a css attr selector
  selector: '.app-servers', // as a css class selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
