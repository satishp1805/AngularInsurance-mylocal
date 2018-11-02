import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collection: any[], field: string, value: string): any[] {

    if (!collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }
    return collection.filter(item => (item[field]).toLowerCase().includes(value.toLowerCase()));
  }

}
