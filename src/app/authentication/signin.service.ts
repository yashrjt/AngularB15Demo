import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map,catchError } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  headers=new HttpHeaders({'content-type':'application/json'});



  isLoggedInSubject;
  isLoggedInObservable;
  tokenAvailable;

    constructor(private http:HttpClient,private router:Router) { 
      if(!!localStorage.getItem('token')){
          this.tokenAvailable=true;
      }
      else{
        this.tokenAvailable=false;
      }
      this.isLoggedInSubject =new BehaviorSubject<boolean>( this.tokenAvailable);
      this.isLoggedInObservable=this.isLoggedInSubject.asObservable();
    }


  login(data){
   return this.http.post('http://localhost:8080/api/login',data,{headers:this.headers}).pipe(
      map((response)=>{
      console.log("SigninService -> login -> response", response['token'])
        localStorage.setItem('token',response['token']);
        this.isLoggedInSubject.next(true);
        return response;
      }),
      catchError((err)=>{
          throw(err);
      })
    );
  }


  logout(){
    localStorage.removeItem('token');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/signin']);
  }

}
