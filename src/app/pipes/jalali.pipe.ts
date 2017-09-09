import {Pipe, PipeTransform} from '@angular/core';
import * as jmoment from 'jalali-moment';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let MomentDate = jmoment(value);

    try {

      if (MomentDate.isValid())
        return MomentDate.format("jYYYY/jM/jD");


    } catch (err) {
    }

    return value;

  }

}
