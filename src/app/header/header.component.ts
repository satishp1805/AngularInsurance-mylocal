import { Component, OnInit } from '@angular/core';
import { PageLink } from '../footer/pagelink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeader: string;
  logo: string;
  linkText: string = "Login";
  links: PageLink[];
  constructor() {
    this.majHeader = "Insurance Company";
    this.logo = "assets/images/logo.JPG";
    this.links = [{ linkText: "Home", linkStyle: "nav-link", linkRef: "home" },
    { linkText: "Products", linkStyle: "nav-link", linkRef: "products" },
    { linkText: "History", linkStyle: "nav-link", linkRef: "history" }]
  }

  ngOnInit() {
  }

}
