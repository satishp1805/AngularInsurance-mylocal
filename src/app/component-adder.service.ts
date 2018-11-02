import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  // Where to Add
  setViewRef(viewRef) {
    this.viewRef = viewRef;
  }

  // What to Add

  addComponent(compToAdd: any): any {

    // Entry components will have a factory created and registred in resolver
    const factory = this.resolver.resolveComponentFactory(compToAdd);

    // Access the viewRef's Injector to inject the component
      const compRef = factory.create(this.viewRef.parentInjector);

      console.log(this.viewRef.parentInjector);

      // insert the hostview of the component

       this.viewRef.insert(compRef.hostView);

        // console.log(compRef);
        // console.log(compRef.hostView);

        return compRef;
  }

  remove() {

     this.viewRef.detach();
  }
}
