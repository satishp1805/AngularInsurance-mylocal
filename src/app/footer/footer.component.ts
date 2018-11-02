import { InfoService } from './../info.service';
import { PageLink } from './../page-link';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [InfoService]
})
export class FooterComponent implements OnInit {

  links: PageLink[] = [
    {linkText: 'Twitter',  linkStyle: 'fa fa-1x fa-twitter'},
   {linkText: 'FaceBook' , linkStyle: 'fa fa-1x fa-facebook'},
   {linkText: 'Instagram', linkStyle: 'fa fa-1x fa-instagram'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
