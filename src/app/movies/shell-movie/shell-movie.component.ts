import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-shell-movie',
  templateUrl: './shell-movie.component.html',
  styleUrls: ['./shell-movie.component.css']
})
export class ShellMovieComponent implements OnInit {

  movieList:Array<Movie>;
  
  constructor(private movies:MovieService) { }

  ngOnInit() {
   this.getMovies();
  }

  getMovies(){
    this.movies.getMovies().subscribe((res)=>{
        this.movieList=res['data']['result'];
        console.log("ShellMovieComponent -> getMovies ->  this.movieList",  this.movieList)
      },
      (err)=>{
      console.log("ListmoviesComponent -> ngOnInit -> err", err)
        
      })
  }

  delMovieHandler(movieid){
 
    this.movies.delMovies(movieid).subscribe((res)=>{
    console.log("ShellMovieComponent -> delMovieHandler -> res", res)
    this.getMovies();
    },(err)=>{
    console.log("ShellMovieComponent -> delMovieHandler -> err", err)
      
    })
  }
}
