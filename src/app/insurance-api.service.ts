import { PolicyDetails } from './content/policy-details';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
  baseURL = "http://localhost:3000/";
  lifeInsuranceURL = this.baseURL+'lifeInsurance';
  headers = new HttpHeaders().set('content-type','application/json');
  
  constructor(private http: HttpClient) { }

  findAllAdvisors():Observable<InsuranceAdvisor[]>{
    const adviseURL = this.baseURL+'advisors';
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findAllPolicies():Observable<PolicyDetails[]>{
    return this.http.get<PolicyDetails[]>(this.lifeInsuranceURL);
  }

  addPolicy(policy:PolicyDetails) : Observable<PolicyDetails>{
    return this.http.post<PolicyDetails>(this.lifeInsuranceURL,policy,{headers:this.headers});
  }

  updatePolicy(policy:PolicyDetails) : Observable<PolicyDetails>{
    return this.http.put<PolicyDetails>(this.lifeInsuranceURL+'/'+policy.id,policy,{headers:this.headers});
  }
  
  removePolicy(policy:PolicyDetails) : Observable<PolicyDetails>{
    return this.http.delete<PolicyDetails>(this.lifeInsuranceURL+'/'+policy.id,{headers:this.headers});
  }

}
