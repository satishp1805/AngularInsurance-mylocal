import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule,HttpClient} from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { MenuComponent } from './menu/menu.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowBranchComponent } from './show-branch/show-branch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { GriddataComponent } from './griddata/griddata.component';
import { HighlightDirective } from './highlight.directive';
import { AddElementDirective } from './add-element.directive';
import { ShowLocationComponent } from './show-location/show-location.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowAdvisorsComponent,
    ShowQuoteComponent,
    MenuComponent,
    SearchBranchComponent,
    ShowBranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    GriddataComponent,
    HighlightDirective,
    AddElementDirective,
    ShowLocationComponent,
    ShowPolicyDetailsComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,NgxPaginationModule,ReactiveFormsModule
  ],
  providers: [HttpClient],
  entryComponents : [ShowLocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
