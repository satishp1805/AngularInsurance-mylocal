import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { viewDef } from '@angular/core/src/view';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  searchCity='';
  branchList:string[];
  @ViewChild('locationInfo',{read:ViewContainerRef}) viewRef:ViewContainerRef
  constructor(private service:ComponentAdderService) { }

  ngOnInit() {
  }
  onChange(val){
    console.log("test2---"+val);
    this.branchList =val;
  }
  add(){
    this.service.setViewRef(this.viewRef);
    //this.service.addComponent(ShowLocationComponent);
    const comp = this.service.addComponent(ShowLocationComponent);
    const locationComp =(<ShowLocationComponent>comp.instance)
    locationComp.selectedLocation.subscribe(val=>
      
      
      {
        this.searchCity =val;
        if(val != '')
          this.remove();
      }
      );
  }
  remove(){
    this.viewRef.detach();
  }
}
