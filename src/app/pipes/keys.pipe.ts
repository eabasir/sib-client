import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'keysGrid',

})
export class KeysGridPipe implements PipeTransform {

  transform(value: any, args: string[]): any {
    let keys = [];

    for (let key in value) {

        keys.push(value[key]);
    }


    return keys;
  }

}
