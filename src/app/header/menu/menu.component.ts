import { ComponentCommunicationService } from './../../component-communication.service';
import {Component, OnInit, Input }from '@angular/core'; 
import {PageLink }from 'src/app/footer/pagelink'; 

@Component( {
selector:'app-menu', 
templateUrl:'./menu.component.html', 
styleUrls:['./menu.component.css']
})
export class MenuComponent implements OnInit {

    @Input()link:string; 
    @Input()linksFromParent:PageLink[]; 
    showLogin:boolean = true; 
    showLogout:boolean = false; 
    constructor(private service:ComponentCommunicationService) {}

    ngOnInit() {
      this.service.message.subscribe(status => {
        console.log(status);
        if (status === 'logged') {
          this.showLogin = false;
          this.showLogout = true;
        } 
        if (status === 'logout') {
          this.showLogin = true;
          this.showLogout = false;
        }
      });
    }

}
