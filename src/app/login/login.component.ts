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
    this.service.changeMessage('logged');

  }
}
