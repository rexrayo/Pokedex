import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 2) return value;
    const resultPk = [];
    for (const pk of value) {
      console.log(pk);
      if (pk.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPk.push(pk);
      };
    };
    return resultPk;
  }

}
