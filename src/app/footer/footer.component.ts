import { Component, OnInit } from '@angular/core';
import { PageLink } from './pagelink';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerList: PageLink[] = [{ linkText: 'Facebook', linkRef: 'https://www.fb.com/insurance',linkStyle: 'fa fa-2x fa-facebook' },
  { linkText: 'Instagram', linkRef: 'https://www.instagram.com/insurance',linkStyle: 'fa fa-2x fa-instagram' },
  { linkText: 'Twitter', linkRef: 'https://www.twitter.com/insurance',linkStyle: 'fa fa-2x fa-twitter' }]
  constructor() { }

  ngOnInit() {
  }

}
