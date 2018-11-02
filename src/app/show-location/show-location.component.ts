import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {
  selectedLocation : BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }
  caputure(val){
   this.selectedLocation.next(val);
  }
  ngOnInit() {
  }

}
