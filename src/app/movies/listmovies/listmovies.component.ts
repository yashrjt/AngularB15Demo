import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {MovieService}  from '../movie.service';


@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  // movieList;

  @Input() movies;

  @Output()  movieid:EventEmitter<number>=new EventEmitter();
  constructor() { }

  ngOnInit() {
  // this.getMovies();
  }

  // getMovies(){
  //   this.movies.getMovies().subscribe((res)=>{
  //     console.log("ListmoviesComponent -> ngOnInit -> res", res)
  //       this.movieList=res;
  //     },
  //     (err)=>{
  //     console.log("ListmoviesComponent -> ngOnInit -> err", err)
        
  //     })
  // }

  deleteMovie(movieid){
    console.log("ListmoviesComponent -> deleteMovie -> movieid", movieid)
    this.movieid.emit(movieid);
  // this.movies.delMovies(movieid).subscribe((res)=>{

  //   console.log("ListmoviesComponent -> deleteMovie -> res", res)
  //   this.getMovies();
  //   },
  //   (err)=>{
  //   console.log("ListmoviesComponent -> ngOnInit -> err", err)
      
  //   })
 

  }
}
