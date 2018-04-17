import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID = 10; // could also strong type it using serverID: Number = 10; but it's automatically infered by TS
    serverStatus = 'offline'; // same here but with string

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'; // pseudo-random serverStatus generation
    }

    // method to get serverStatus property
    getServerStatus() {
        return this.serverStatus;
    }

    // method to get color based on server status
    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
