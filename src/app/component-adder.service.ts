import { RouterModule } from '@angular/router';
import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver:ComponentFactoryResolver) { }

  // where to add
  setViewRef(viewRef){
    this.viewRef = viewRef;
  }

  // what to add
  addComponent(compToAdd:any): void {
    // create and register factory in resolver for entry components
    const factory = this.resolver.resolveComponentFactory(compToAdd);
    // Access the viewref's injector to inject the component
    const componentRef = factory.create(this.viewRef.parentInjector);
    // insert the hostview of the component to be injected into viewcontainerref
    this.viewRef.insert(componentRef.hostView);
  }

  remove(){
    this.viewRef.remove();
  }

}
