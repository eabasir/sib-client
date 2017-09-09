import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'cats'
})
export class CatsPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return _.groupBy(value, 'category')[args];
  }

}
