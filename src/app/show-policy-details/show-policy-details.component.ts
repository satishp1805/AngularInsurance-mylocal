import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetails } from '../content/policy-details';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  policyListAll: PolicyDetails[] = [];
  searchName : string ='';
  buttonText:string = "Add";
  policyData: PolicyDetails = {
    id: 0,
    policyHolderName: '',
    maturityDate: new Date(),
    policyAmount: 0
  }
  @ViewChild('f') form:any;
  indexPos: number;
  toggleForm:boolean=false;
  constructor(private insuranceService:InsuranceAPIService) {
    this.insuranceService.findAllPolicies().subscribe(data=>this.policyListAll=data);
  }

  ngOnInit() {
  }

  submit(){
    if (this.buttonText === "Update") {
      this.insuranceService.updatePolicy(this.policyData).subscribe(resp=>{
        this.policyListAll[this.indexPos]=resp;
        this.form.reset();
        this.buttonText = "Add";
      });
    } else if (this.buttonText === "Add") {
      this.insuranceService.addPolicy(this.policyData).subscribe(resp=>{
        this.policyListAll.push(resp);
        this.form.reset();
      });
    }
  }

  update(policy){
    this.buttonText = "Update";
    this.policyData = policy;
    this.indexPos = this.policyListAll.indexOf(this.policyData);
    console.log("update called");
  }

  remove(policy){
    const indexPos = this.policyListAll.indexOf(policy);
    this.insuranceService.removePolicy(policy).subscribe(resp=>{
      this.policyListAll.splice(indexPos,1);
    });
    console.log("remove called");
  }

}
