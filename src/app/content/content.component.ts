import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PolicyDetails } from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  policyInfo: PolicyDetails[];
  feedback1:string;
  feedback2:string;
  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;
  constructor(private ref:ChangeDetectorRef) { 

    this.policyInfo =[{policyName:'LIC',policyDesc:'Jeevan Jyothi',         policyAmount:450000},
    {policyName:'HDFC',policyDesc:'HDFC insurance',         policyAmount:550000},
    {policyName:'ICICI',policyDesc:'ICICI insurance',         policyAmount:760000}];   
 

  }

  ngOnInit() {
  }
  ngAfterViewInit():void{
    this.feedback1 = this.compRef.getRetailCustomerFeedback();
    this.feedback2 = this.compRef.getCorpCustomerFeedBack();
    this.ref.detectChanges(); 
  }
}
