import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<any> {
  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const url = currentRoute.url;
    const prevURL =currentState.url;
    const result = window.confirm('Are you sure');
    console.log(url);
    console.log(prevURL);

    if(!result){
      this.router.navigate([prevURL]);
    }
    
    return result; //window.confirm('Are you sure');
    
  }
 
  
  constructor(private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      let allow= false;
      if(sessionStorage.getItem('logged')==='true'){
        allow=true;
      }else{
        this.router.navigate(['/login','Logged User can only access this page']);
      }
    return allow;
  }
}
