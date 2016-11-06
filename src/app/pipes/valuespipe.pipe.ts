import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'values' })
export class ValuesPipe implements PipeTransform {

  transform(obj: Object) {
    let values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    return values;
  }
  
}