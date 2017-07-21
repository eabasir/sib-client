import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keysGrid'
})
export class KeysGridPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let keys = [];

    let i = 0;

    let sub_array = [];
    for (let key in value) {

      i++;
      if (i % 2 !== 0) {
        sub_array = [];
        keys.push(sub_array);

      }
      sub_array.push(value[key]);

    }


    return keys;
  }

}
