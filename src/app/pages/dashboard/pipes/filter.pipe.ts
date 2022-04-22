import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T>(list: T[], prop: string, value: any): T[] {
    return list.filter(item => item[prop] === value);
  }

}
