import { InsuranceAdvisor } from './../insurance-advisor';
import { InsuranceAPIService } from './../insurance-api.service';
import { Component, OnInit } from '@angular/core';
import { myLogger } from '../custom-decorator';

@Component({
  selector: 'app-show-advisors',
  templateUrl: './show-advisors.component.html',
  styleUrls: ['./show-advisors.component.css']
  })
  @myLogger()
export class ShowAdvisorsComponent implements OnInit {

  advisorList: InsuranceAdvisor[];

  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {

     this.service.findAllAdvisors().subscribe(data => this.advisorList = data, err => console.log(err));

   // this.service.findAllAdvisorsAsPromise().then(data => this.advisorList = data);
  }


}
