import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedback():string{

    return "Claims processing is prompt and recieved payment within days!"
  }

  getCorpCustomerFeedback():string{
    return "Door step service by the advisors is very much appriciated!"
  }



}
