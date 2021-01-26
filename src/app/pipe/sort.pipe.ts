import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], col: string = 'name', order: string = 'desc'): any[] {
    console.log("pipe transform method called");
    console.log(`Sort movies by ${col} order ${order}`)
    return arr.sort(compareFn);
    function compareFn(a, b) {
      var multiplier = (order === 'desc') ? -1 : 1;
      var x = a[col];
      var y = b[col];
    if(typeof x === 'string') {
        x = x.toUpperCase();
        y = y.toUpperCase();
      }
      if(x === y) return 0;
      if(x < y)
        return -1 * multiplier;
      else
        return 1 * multiplier;
    }
  }
}