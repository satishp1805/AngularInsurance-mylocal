import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective {

  @Input()
  elementToAdd:string;

  @Input()
  elementText:string;

  constructor(private el:ElementRef,private renderer:Renderer2) { }

  @HostListener('click')
  addElement(){
     const newElement = this.renderer.createElement(this.elementToAdd);
     const text = this.renderer.createText(this.elementText);

     this.renderer.appendChild(newElement,text);
     const pos = this.renderer.selectRootElement('article');
     this.renderer.appendChild(pos,newElement);
     console.log(newElement);
  }

}
