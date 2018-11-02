import { PageLink } from './../page-link';
import { Component, OnInit } from '@angular/core';
import { myLogger } from '../custom-decorator';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
@myLogger()
export class HeaderComponent implements OnInit {

  majHeading: string;
  logo: string;

  links:PageLink[];

  constructor() {

    this.links = [
      {linkText: 'Products', linkRef: 'products', linkStyle: 'nav-link'},
      {linkText: 'History', linkRef: 'history', linkStyle: 'nav-link'},
      {linkText: 'Advisors', linkRef: 'advisors', linkStyle: 'nav-link'},
      {linkText: 'Get Quote', linkRef: 'quote', linkStyle: 'nav-link'},
      {linkText: 'Branches', linkRef: 'branches', linkStyle: 'nav-link'}
     ];



    this.majHeading = 'MinBapa Insurance';
    this.logo = 'assets/images/logo.jpg';
   }

  ngOnInit() {
  }

}
