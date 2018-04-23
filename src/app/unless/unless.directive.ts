import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // since we use property binding we either give it an alias that matches our directive name or change the property name here to match it as well
  @Input('appUnless') set unless(condition: boolean) { // this is a setter... so it creates a method but also a property with the same name
    // this method will execute whenever the property with the same name (in this case 'unless') changes
    if (!condition) {
      // createEmbeddedView to add the template where the code is at to the view
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      // if it's true (remember this is opposite of ngIf) then we want to clear the view/remove everything so we call clear()
      this.viewContainerRef.clear();
    }
  }

  /*
    A view container ref:

    Represents a container where one or more Views can be attached.

    The container can contain two kinds of Views. Host Views, created by instantiating a Component via createComponent,
     and Embedded Views, created by instantiating an Embedded Template via createEmbeddedView.
   */

  // we inject templateRef - so that we can access the ngTemplate element and conditionally display it or not
  // we also inject viewContainerRef - so we can access the view that contains this element and then we can inject said template on it
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

}
