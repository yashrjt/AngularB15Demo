import { Component, OnInit } from '@angular/core';
import {SigninService}  from '../../authentication/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean;

  constructor(private signin:SigninService) { }

  ngOnInit() {
    this.signin.isLoggedInObservable.subscribe((res)=>{
    console.log("HeaderComponent -> ngOnInit -> res", res)
      this.isLoggedIn=res;
    })
  }

  logout(){
    this.signin.logout();
  }

}
