import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SigninService} from '../signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   signInForm:FormGroup;
  loginDetails;
  constructor(private fb:FormBuilder,private service:SigninService,private router:Router) { }

  ngOnInit() {
    this.signInForm=this.fb.group({
      email:'',
      password:''
    })

  }


  loginForm(){
    console.log( this.signInForm.value);
    this.loginDetails=this.signInForm.value;
    this.service.login( this.loginDetails).subscribe((res)=>{
    console.log("SigninComponent -> loginForm -> res", res)
      this.router.navigate(['/home']);
    },
    (err)=>{
    console.log("SigninComponent -> loginForm -> err", err)
      
    });
    //clear the form
    this.signInForm.reset();
  }

}
