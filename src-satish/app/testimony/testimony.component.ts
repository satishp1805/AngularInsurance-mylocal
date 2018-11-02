import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit  {

  constructor() { }

  ngOnInit() {
  }
  getRetailCustomerFeedback():string{
     return 'Clain processing is prompt and received payment';
  }
  getCorpCustomerFeedBack():string{
      return 'corp customer is prompt';
  }
}
