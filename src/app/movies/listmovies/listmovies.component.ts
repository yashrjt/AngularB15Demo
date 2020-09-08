import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import {MovieService}  from '../movie.service';


@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  @Input() movies;

  @Output()  movieid:EventEmitter<number>=new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  
  }

  checkRatingType(rating){
      if(rating>4.5){
        return true;
      }
      else{
        return false;
      }
  }

  deleteMovie(movieid){
    console.log("ListmoviesComponent -> deleteMovie -> movieid", movieid)
    this.movieid.emit(movieid);
  }
}
