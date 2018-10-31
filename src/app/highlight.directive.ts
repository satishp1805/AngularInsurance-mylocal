import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef,private renderer: Renderer2) { }

  @HostListener('mouseover')
  over(){
    console.log('over called');
    this.renderer.addClass(this.el.nativeElement,'rotate');
    this.renderer.setStyle(this.el.nativeElement,'font-size','1.4em');
    console.log(this.el.nativeElement);
  }

  @HostListener('mouseout')
  out(){
    console.log('out called');
    this.renderer.removeClass(this.el.nativeElement,'rotate');
    this.renderer.removeStyle(this.el.nativeElement,'font-size');
    console.log(this.el.nativeElement);
  }
}
