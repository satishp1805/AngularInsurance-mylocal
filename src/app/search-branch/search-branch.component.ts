import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  searchCity:string = '';
  branchList:string[];
  constructor() { }

  ngOnInit() {
  }

  onChange(val){
    this.branchList = val;
  }

}
