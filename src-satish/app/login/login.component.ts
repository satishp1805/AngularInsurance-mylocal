import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  formConfig =[
   {type:'text',name:'userName', label:'User Name',constraint:Validators.required},
   {type:'password',name:'passWord', label:'Pass word', constraint:Validators.required}
  ];
  constructor(private service:ComponentCommunicationService,private builder:FormBuilder) { 
  this.loginForm = this.builder.group({});
  }

  ngOnInit() {
    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name,new FormControl('',{validators:element.constraint}));
    });
  }
  validate(){
    console.log(this.loginForm.value);
    const uname  = this.loginForm.controls.userName.value;
    const pwd = this.loginForm.controls.passWord.value;
if(uname === 'india' && pwd ==='india'){
  sessionStorage.setItem('logged','true');
}

    this.service.changeMessage('logged');

  }
}
