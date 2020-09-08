import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { map,catchError } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  headers=new HttpHeaders({'content-type':'application/json'});

  
  constructor(private http: HttpClient) { }
   
  getMovies():Observable<any>{
    return this.http.get('http://localhost:8080/api/movies/getAllMovies',{headers:this.headers}).pipe(
      map((response)=>{
      
        return response;
      }),
      catchError((err)=>{
          throw(err);
      })
    );
  }


  delMovies(movieid){
    return this.http.delete(`http://localhost:8080/api/movies/deleteMovie/${movieid}`,{headers:this.headers}).pipe(
      map((response)=>{
      
        return response;
      }),
      catchError((err)=>{
          throw(err);
      })
    );
  }
  
  }

