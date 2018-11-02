import { Component, OnInit } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  links: PageLink[]  =[
    {linkText: 'Twitter', linkStyle: 'fa fa-2x fa-twitter'},
    {linkText: 'facebook', linkStyle: 'fa fa-2x fa-facebook'},
    {linkText: 'Instagram', linkStyle: 'fa fa-2x fa-Instagram'}

  ];
  
  //footerHeading:string;
  //links: string[];
  constructor() { 

    //this.footerHeading ='Follow on';
    //this.links=['Google', 'Face Book','Twitter'];
  }

  ngOnInit() {
  }

}
