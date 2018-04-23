import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // the way it will work is... when we click on the element it will add a CSS class (so bootstrap knows when to show/hide
  // and when we click it again it will remove it if it has that class

  @HostBinding('class.open') isOpen = false;

  constructor() {}

  @HostListener('click') toggleOpenClass() {
    console.log('click event!');
    this.isOpen = !this.isOpen;
  }
}
