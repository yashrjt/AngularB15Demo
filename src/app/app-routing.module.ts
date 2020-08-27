import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';


const routes: Routes = [

{path:'home',component:HomeComponent},
{path:'movies',component:MoviesComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
