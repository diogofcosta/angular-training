import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // serverCreated event with data type that's specified
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // blueprintCreated event with data type that's specified
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput') contentInput: ElementRef; // let's use this to "bind" or link to the html reference we have on the template

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) { // what we receive is actually the element reference.. not the value
    this.serverCreated.emit({
      serverName: nameInput.value, // html input elements have value... that we can get!
      serverContent: this.contentInput.nativeElement.value // we didn't PASS the element when we called the method... we used the ViewChild to link it
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value, // html input elements have value... that we can get!
      serverContent: this.contentInput.nativeElement.value // we didn't PASS the element when we called the method... we used the ViewChild to link it
    });
  }

}
