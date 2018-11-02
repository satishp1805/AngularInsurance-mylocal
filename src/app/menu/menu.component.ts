import { ComponentCommunicationService } from './../component-communication.service';
import { PageLink } from './../page-link';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MenuComponent implements OnInit {

      @Input() linksFromParent: PageLink[];
      showLogin = true;
      showLogout = false;
  constructor(private service: ComponentCommunicationService) { }

  ngOnInit() {

     this.service.message.subscribe(status => {

      if (status === 'logged') {
       this.showLogout = true;
       this.showLogin =  false;
      }

      if (status === 'logout') {
        this.showLogout = false;
        this.showLogin =  true;
       }

     });
  }

}
