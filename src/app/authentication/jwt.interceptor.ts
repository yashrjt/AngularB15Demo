import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class JWTInterceptor implements HttpInterceptor{

    construtor(){

    }

    intercept(req:HttpRequest<any>,next:HttpHandler){
    console.log("JWTInterceptor -> intercept -> req", req)
        const token=localStorage.getItem('token');
        if(token){
            const clonereq=req.clone({
                headers:req.headers.set('x-access-token',token)
            })
            return next.handle(clonereq);
        }
        else{
            return next.handle(req);
        }
        
        
    }
}