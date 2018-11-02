import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.css']
})
export class ShowLocationComponent implements OnInit {

  selectedLocation: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  ngOnInit() {
  }
  capture(val) {
    this.selectedLocation.next(val);
    console.log(val);

  }
}
