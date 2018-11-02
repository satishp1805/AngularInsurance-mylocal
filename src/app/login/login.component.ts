import { ComponentCommunicationService } from './../component-communication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

   formConfig: any = [
     {type: 'text', name: 'userName', label: 'User Name', constraint: Validators.required},
     {type: 'password', name: 'passWord', label: 'Pass Word', constraint: Validators.required},

   ];
   errorMessage:string;
  constructor(private service: ComponentCommunicationService, 
    private builder: FormBuilder, private router:Router, private route:ActivatedRoute) {

   this.loginForm = this.builder.group({});
   
  }

  ngOnInit() {
      this.route.params.subscribe(param => {
        this.errorMessage =param['msg'];
      }); 
      this.formConfig.forEach(element => {
          this.loginForm.addControl(element.name, new FormControl('', {validators: element.constraint}));
      });
  }

  validate() {
    const uname =this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.passWord.value;
    console.log(this.loginForm.value);
    if(uname == 'india' && pwd =='india'){
      sessionStorage.setItem('logged','true');
      this.router.navigate(['products']);
    }else{
      this.errorMessage ="Error";
    }
     this.service.changeMessage('logged');
  }
}
