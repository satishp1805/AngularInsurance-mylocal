import { Component, OnInit, Input } from '@angular/core';
import { PageLink } from 'src/app/footer/pagelink';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() link:string;
  @Input() linksFromParent:PageLink[];
  constructor() { }

  ngOnInit() {
  }

}
