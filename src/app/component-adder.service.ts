import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {
  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }
  //what to add
  addComponent(compAdd:any):any{
    const factory =this.resolver.resolveComponentFactory(compAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(compRef.hostView);
    return compRef;
  }
}
