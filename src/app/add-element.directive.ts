import { Directive, Input, HostListener, ElementRef, Renderer2 , OnInit} from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective implements OnInit {

  @Input() elementToAdd: string;
  @Input() elementText: string;


  constructor(private el: ElementRef, private renderer:Renderer2) { }

  ngOnInit(){



  }
   @HostListener('click') addElement() {

    const newElement = this.renderer.createElement(this.elementToAdd);

    const text = this.renderer.createText(this.elementText);

    this.renderer.appendChild(newElement, text);

    const pos = this.renderer.selectRootElement('article');

     this.renderer.appendChild(pos, newElement);

     }
}
