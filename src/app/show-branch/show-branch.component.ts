import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName:string;
  @Output() branches:EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() { 
    console.log("Constructor "+this.cityName);
  }

  ngOnInit() {
    console.log("Init "+this.cityName);
  }

  sendBranches(){
    if (this.cityName === 'hyd') {
      this.branches.emit(['Lingampally','Madhapur','Miyapur','Hitech']);
    }else{
      this.branches.emit(['Anna Nagar','Gandhi Nagar','Indira Nagar','Nehru Nagar']);
    }
    
  }

}
