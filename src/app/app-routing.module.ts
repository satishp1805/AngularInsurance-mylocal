import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: 'product',component:ContentComponent},
  {path: 'history',component:ShowPolicyDetailsComponent},
  {path: 'advisor',component:ShowAdvisorsComponent},
  {path: 'quote',component:ShowQuoteComponent},
  {path: 'branches',component:SearchBranchComponent},
  {path:'logout',component:LogoutComponent},
  {path: '**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
