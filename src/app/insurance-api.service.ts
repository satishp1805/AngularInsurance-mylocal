import { PolicyDetails } from './content/policy-details';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {
  baseURL = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  findAllAdvisors():Observable<InsuranceAdvisor[]>{
    const adviseURL = this.baseURL+'advisors';
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
  }

  findAllPolicies():Observable<PolicyDetails[]>{
    const adviseURL = this.baseURL+'lifeInsurance';
    return this.http.get<PolicyDetails[]>(adviseURL);
  }

}
