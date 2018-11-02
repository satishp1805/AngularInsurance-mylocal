import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetail } from './policy-detail';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
  baseURL = 'http://localhost:3000/';
 policyURL = this.baseURL+'lifeInsurance';
  header = new HttpHeaders().set('content-type','application/json');
  constructor(private http: HttpClient) { }
  findAllAdvisors(): Observable<InsuranceAdvisor[]> {
    const adviseURL = this.baseURL+'advisors';
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findPolicy(): Observable<PolicyDetail[]> {
 //   const policyURL = this.baseURL+'lifeInsurance';
    return this.http.get<PolicyDetail[]>(this.policyURL);
  }
  addPolicy(policy:PolicyDetail):Observable<PolicyDetail>{
    console.log("------------"+policy.policyHolderName);
    return this.http.post<PolicyDetail>(this.policyURL,policy,{headers:this.header});
  }
  delete(policy:PolicyDetail):Observable<PolicyDetail>{
    console.log("------------"+policy.policyHolderName);
     return this.http.delete<PolicyDetail>(this.policyURL+'/'+policy.id,{headers:this.header});
    //return this.http.post<PolicyDetail>(this.policyURL,policy,{headers:this.header});
  }
  updatePolicy(policy:PolicyDetail):Observable<PolicyDetail>{
    console.log("------------"+policy.policyHolderName);
    return this.http.put<PolicyDetail>(this.policyURL+'/'+policy.id,policy,{headers:this.header});
  }
}
