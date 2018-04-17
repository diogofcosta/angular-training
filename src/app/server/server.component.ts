import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverID = 10; // could also strong type it using serverID: Number = 10; but it's automatically infered by TS
    serverStatus = 'offline'; // same here but with string

    // method to get serverStatus property
    getServerStatus() {
        return this.serverStatus;
    }
}
