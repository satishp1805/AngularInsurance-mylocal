import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {
  isDisabled=true;
  age=18;
  suggestedPolicy:string;
  constructor() { }

  ngOnInit() {
  }

  showPolicy(){
    if(this.age >30){
       this.suggestedPolicy ='Jeevan Anad';
    }else{
      this.suggestedPolicy ='HdFC policy';
    }
  }
  changeStatus(){
    this.isDisabled =false;
  }

}
