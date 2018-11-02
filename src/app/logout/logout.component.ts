import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:ComponentCommunicationService) { }

  ngOnInit() {
  }
  signout(){
    this.service.changeMessage('logged');

  }
}
