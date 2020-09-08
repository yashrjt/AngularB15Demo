import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule, FormsModule}  from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './jwt.interceptor';
import { DescribeDirective } from './describe.directive';


@NgModule({
  declarations: [SigninComponent, SignupComponent, DescribeDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[SigninComponent,SignupComponent],
  providers:[{provide:HTTP_INTERCEPTORS,useClass:JWTInterceptor,multi:true}]
})
export class AuthenticationModule { }
