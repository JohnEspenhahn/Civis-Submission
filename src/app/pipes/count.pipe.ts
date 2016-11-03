import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'count' })
export class CountPipe implements PipeTransform {

  transform(obj: Object) {
    return Object.keys(obj).length;
  }
  
}