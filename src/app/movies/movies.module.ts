import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { MoviesComponent } from './movies/movies.component';

import {MovieRoutingModule}  from './movies.routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

@NgModule({
  declarations: [CreatemovieComponent, ListmoviesComponent, MoviesComponent,ShellMovieComponent,MoviedetailComponent],
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  exports:[CreatemovieComponent,ListmoviesComponent,MoviesComponent,ShellMovieComponent,MoviedetailComponent]
})
export class MoviesModule { }
