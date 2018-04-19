import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') element: {name: string, content: string, type: string};
  @Input() name: string;

  constructor() {
    console.log('Server-Element: Constructor was called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Server-Element: OnChanges was called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('Server-Element: OnInit Called');
  }

}
