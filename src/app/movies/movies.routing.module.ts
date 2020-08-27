import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent}  from './movies/movies.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';


const routes: Routes = [

{path:'',component:MoviesComponent,
children:[
    {path:'create-movie',component:CreatemovieComponent},
    {path:'list-movie',component:ListmoviesComponent}
]},




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
