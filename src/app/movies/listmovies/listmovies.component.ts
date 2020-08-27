import { Component, OnInit } from '@angular/core';
import {MovieService}  from '../movie.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  movieList;
  constructor(private movies:MovieService) { }

  ngOnInit() {
   this.getMovies();
  }

  getMovies(){
    this.movies.getMovies().subscribe((res)=>{
      console.log("ListmoviesComponent -> ngOnInit -> res", res)
        this.movieList=res;
      },
      (err)=>{
      console.log("ListmoviesComponent -> ngOnInit -> err", err)
        
      })
  }

  deleteMovie(movieid){
  this.movies.delMovies(movieid).subscribe((res)=>{

    console.log("ListmoviesComponent -> deleteMovie -> res", res)
    this.getMovies();
    },
    (err)=>{
    console.log("ListmoviesComponent -> ngOnInit -> err", err)
      
    })
 

  }
}
