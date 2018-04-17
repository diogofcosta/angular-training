import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // as a normal component
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationMessage = 'No server was created yet!';
  serverName = 'Placeholder';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 3000);
  }

  ngOnInit() {
  }

  // creating a server handler (reacting to an event)
  onCreateServer() {
    this.serverCreationMessage = `A server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
