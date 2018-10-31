import { ComponentCommunicationService } from './../component-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:ComponentCommunicationService) { }

  ngOnInit() {
  }

  validate(){
    this.service.changeMessage('logged');
  }

}
