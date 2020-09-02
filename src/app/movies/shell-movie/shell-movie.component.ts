import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';

@Component({
  selector: 'app-shell-movie',
  templateUrl: './shell-movie.component.html',
  styleUrls: ['./shell-movie.component.css']
})
export class ShellMovieComponent implements OnInit {

  movieList;
  inputvalue='xyz';
  constructor(private movies:MovieService) { }

  ngOnInit() {
   this.getMovies();
  }

  getMovies(){
    this.movies.getMovies().subscribe((res)=>{
        this.movieList=res;
        console.log("ShellMovieComponent -> getMovies ->  this.movieList",  this.movieList)
      },
      (err)=>{
      console.log("ListmoviesComponent -> ngOnInit -> err", err)
        
      })
  }

}
