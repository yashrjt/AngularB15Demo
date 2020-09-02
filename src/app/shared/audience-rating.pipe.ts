import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'audienceRating'
})
export class AudienceRatingPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return 10+value;
  }

}
