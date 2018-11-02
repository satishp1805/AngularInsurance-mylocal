import { Component, OnInit, Input } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() link: string;
  showLogin = true;
  showLogout = false;
  constructor(private service: ComponentCommunicationService) { }

  ngOnInit() {
    this.service.message.subscribe(status => {
      if (status == 'logged') {
        this.showLogout = !this.showLogout;
        this.showLogin = !this.showLogin;
      }
    }
    )
  }
}
