import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudienceRatingPipe } from './audience-rating.pipe';



@NgModule({
  declarations: [AudienceRatingPipe],
  imports: [
    CommonModule
  ],
  exports:[AudienceRatingPipe]
})
export class SharedModule { }
