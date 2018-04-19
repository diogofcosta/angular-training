import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: {name: string, content: string, type: string};
  @Input() name: string;
  @ViewChild('headingRef') header: ElementRef;

  constructor() {
    console.log('Server-Element: Constructor was called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Server-Element: OnChanges was called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('Server-Element: OnInit Called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
  }

  ngDoCheck() {
    console.log('Server-Element: DoCheck Called');
  }

  ngAfterContentInit() {
    console.log('Server-Element: AfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('Server-Element: AfterContentCheck Called');
  }

  ngAfterViewInit() {
    console.log('Server-Element: AfterViewInit Called');
    console.log(`Text content: ${this.header.nativeElement.textContent}`);
  }

  ngAfterViewChecked() {
    console.log('Server-Element: AfterViewCheck Called');
  }

  ngOnDestroy() {
    console.log('Server-Element: OnDestroy Called');
  }

}
