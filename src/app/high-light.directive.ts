import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  public el: ElementRef;
  constructor(el: ElementRef, private renderer: Renderer2) {
    this.el = el;
   }

   @HostListener('mouseover')  over() {

    this.renderer.addClass(this.el.nativeElement, 'rotate');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    }

   @HostListener('mouseout')out() {
    this.renderer.removeClass(this.el.nativeElement, 'rotate');
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'none');

     }
}
