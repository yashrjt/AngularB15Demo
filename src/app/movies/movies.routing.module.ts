import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent}  from './movies/movies.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { ShellMovieComponent } from './shell-movie/shell-movie.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';


const routes: Routes = [

{path:'',component:MoviesComponent,
children:[
    {path:'create-movie',component:CreatemovieComponent},
    {path:'viewmovie',component:ShellMovieComponent},
     {path:'viewmovie/:movieid',component:MoviedetailComponent}
    
]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
