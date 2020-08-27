import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { MoviesComponent } from './movies/movies.component';

import {MovieRoutingModule}  from './movies.routing.module';

@NgModule({
  declarations: [CreatemovieComponent, ListmoviesComponent, MoviesComponent],
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  exports:[CreatemovieComponent,ListmoviesComponent,MoviesComponent]
})
export class MoviesModule { }
