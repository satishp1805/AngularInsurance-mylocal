import { InsuranceAPIService } from './../insurance-api.service';
import { TestimonyComponent } from './../testimony/testimony.component';
import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList, ViewEncapsulation } from '@angular/core';
import { PolicyDetails } from './policy-details';
import { Policy } from './policy';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ContentComponent implements OnInit,AfterViewInit  {

  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;
  policyList: Policy[] = [];
  policyListAll: PolicyDetails[] = [];
  feedback1:string;
  feedback2:string;
  searchName : string ='';
  @ViewChildren("div") selectionList:QueryList<any>;

  constructor(private ref: ChangeDetectorRef,private insuranceService:InsuranceAPIService) {
    this.policyList.push({id:1,name:'Policy 1',description:'Description 1',amount:100,maturityDate:"2020-10-12"});
    this.policyList.push({id:2,name:'Policy 2',description:'Description 2',amount:200,maturityDate:"2020-10-12"});
    this.policyList.push({id:3,name:'Policy 3',description:'Description 3',amount:300,maturityDate:"2020-10-12"});

    this.insuranceService.findAllPolicies().subscribe(data=>this.policyListAll=data);
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
