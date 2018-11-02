import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {


  @Input() cityName:string;
  @Output()  branches:EventEmitter<string[]> = new EventEmitter<string[]>(); 
  constructor() {
    console.log(this.cityName);
   }
   
   
  ngOnInit() {
  }
   sendBranches(){
     console.log("test----"+this.cityName);
     if (this.cityName =='hyd'){
      this.branches.emit(['kukatipally','madhapur','asrao']);
      
     }else{
      this.branches.emit(['kukatipally2','madhapur2','asrao2']);
     }
   }
}
