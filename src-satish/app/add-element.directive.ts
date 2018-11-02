import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective {
  @Input() elementToAdd: string;
  @Input() elementText: string;
  constructor(private e1: ElementRef, private renderer: Renderer2) { }
  @HostListener('click') AddElementDirective() {
   const newElement =this.renderer.createElement(this.elementToAdd);
   const text = this.renderer.createText(this.elementText);
   this.renderer.appendChild(newElement,text);
   console.log(newElement);
   const postion = this.renderer.selectRootElement('article');
   this.renderer.appendChild(postion,newElement);
  }

}
