import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  @ViewChild('f') form:any;
  constructor(private service: InsuranceAPIService) { }
   polictyList: PolicyDetail[];
   searchName='';
   idxPox:number;
   showUp = true;
   showDown = false;
   toggleForm = false;
   policyData:PolicyDetail ={
     id :0,
     policyHolderName:'',
     maturityDate: new Date(),
     policyAmount: 0
     
   };
   buttonText ='Add';
  ngOnInit() {
    this.service.findPolicy().subscribe(data =>this.polictyList=data);
  }
  submit(){
    if(this.buttonText == 'Add'){
    this.service.addPolicy(this.policyData).subscribe(resp => {
     this.polictyList.push(resp);
     this.form.reset();
    });
  }else{
   this.service.updatePolicy(this.policyData).subscribe(resp=>{
    this.polictyList[this.idxPox] =resp;
    this.form.reset();
   });
  }
    console.log(this.policyData);
  }
  update(policy){
     this.idxPox = this.polictyList.indexOf(policy);
    this.buttonText ='Update';
    this.policyData = policy;
    console.log("update called");
  }
  remove(policy){
    const idxPox = this.polictyList.indexOf(policy);
    this.service.delete(policy).subscribe(resp => {
     this.polictyList.splice(idxPox,1);
      
     });
    console.log("remove called");
      }
  showForm(){
    this.toggleForm =!this.toggleForm;
    this.showUp =false;
    this.showDown=true;
  }
}
