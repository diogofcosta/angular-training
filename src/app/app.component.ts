import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'test server', content: 'test content'}];

  onServerCreated(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type:     'server',
      name:     serverData.serverName,
      content:  serverData.serverContent
    });
  }

  onBlueprintCreated(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type:     'blueprint',
      name:     blueprintData.serverName,
      content:  blueprintData.serverContent
    });
  }

  onChangeFirst() {
    // will fail if we empty the array, this is just for testing
    this.serverElements[0].name = 'changed the name!';
  }
}
