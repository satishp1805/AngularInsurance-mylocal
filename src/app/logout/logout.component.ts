import { ComponentCommunicationService } from './../component-communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:ComponentCommunicationService, private router:Router) { }

  ngOnInit() {
  }

  signout() {

     this.service.changeMessage('logout');
     sessionStorage.removeItem('logged');
     this.router.navigate(['login']);
  }
}
