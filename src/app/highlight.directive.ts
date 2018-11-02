import { Directive, EmbeddedViewRef, ElementRef, Renderer, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef, private renderer : Renderer2) { }
   @HostListener('mouseover') over(){
     this.renderer.addClass(this.el.nativeElement,'rotate');
     console.log('mouse over called');
     console.log(this.el.nativeElement);
   }
   @HostListener ('mouseout') out(){
     console.log('mouse out called');
     console.log(this.el.nativeElement);
     this.renderer.addClass(this.el.nativeElement,'rotate');
   }
}
