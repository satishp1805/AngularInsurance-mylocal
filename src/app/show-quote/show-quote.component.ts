import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  isDisabled :boolean = true;
  age : number = 18;
  suggestedPolicy: string;
  constructor() { }

  ngOnInit() {
  }

  changeStatus(){
    this.isDisabled=false;
  }

  showPolicy(){
    if (this.age<30) {
      this.suggestedPolicy = "Policy less than 30";
    } else {
      this.suggestedPolicy = "Policy greater than 30";
    }
    console.log("isDisabled: "+this.isDisabled+" age: "+this.age);
  }

}
