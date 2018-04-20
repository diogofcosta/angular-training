import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'red';

  @HostBinding('style.color') fontColor: string = 'initial';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color', this.defaultColor);
  }

  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    // now it will only style it red on mouseenter events on the HTML element we use the directive on
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color', this.highlightColor);
    this.fontColor = 'white';
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    // now it will only style it red on mouseenter events on the HTML element we use the directive on
    this.renderer.setStyle(this.elementRef.nativeElement , 'background-color', this.defaultColor);
    this.fontColor = 'black'; // instead of using the Rendered we can use HostBinding to bind to a DOM element property!
  }

}
