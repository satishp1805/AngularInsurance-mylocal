import { Testimony } from './../testimony';
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

   getRetailCustomerFeedBack(): Testimony {

     console.log('inside retail customer');
    return {comment: 'Claims processing is prompt and received payment within a weeks time',
        id: 401, name: 'Nagi Reddy', relationship: 'Jeevan Ananad Policy Holder', designation: 'Manager,Indian Bank'};

   }

   getCorpCustomerFeedBack(): string {

    return 'Door step service by the advisors is very much appreciated';
   }
}
