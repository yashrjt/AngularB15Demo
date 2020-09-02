import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {AuthenticationModule}  from './authentication/authentication.module';
import {MoviesModule}  from './movies/movies.module';
import {CoreModule}  from './core/core.module';
import {SharedModule}  from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    MoviesModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
