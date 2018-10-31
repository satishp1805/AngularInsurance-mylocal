import { TestimonyComponent } from './../testimony/testimony.component';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { PolicyDetails } from './policy-details';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,AfterViewInit  {

  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;
  policyList: PolicyDetails[] = [];
  feedback1:string;
  feedback2:string;
  @ViewChildren("div") selectionList:QueryList<any>;

  constructor(private ref: ChangeDetectorRef) {
    this.policyList.push({id:1,name:'Policy 1',description:'Description 1',amount:100});
    this.policyList.push({id:2,name:'Policy 2',description:'Description 2',amount:200});
    this.policyList.push({id:3,name:'Policy 3',description:'Description 3',amount:300});
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    
    this.feedback1 = this.compRef.getCorpCustomerFeedback();
    this.feedback2 = this.compRef.getRetailCustomerFeedback();
    this.ref.detectChanges();

    console.log(this.selectionList);
  }
}
