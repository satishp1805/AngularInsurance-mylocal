import {Component, OnInit, ViewChild, ViewContainerRef }from '@angular/core'; 
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component( {
  selector:'app-search-branch', 
  templateUrl:'./search-branch.component.html', 
  styleUrls:['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  @ViewChild('locationInfo',  {read:ViewContainerRef}) 
  viewref:ViewContainerRef; 
  
  searchCity:string = ''; 
  branchList:string[]; 
  constructor(private compAddService: ComponentAdderService) {}

  ngOnInit() {
  }

  onChange(val) {
    this.branchList = val; 
  }

  add(){
    this.compAddService.setViewRef(this.viewref);
    this.compAddService.addComponent(ShowLocationComponent);
  }

  remove(){
    this.compAddService.remove();
  }
}
