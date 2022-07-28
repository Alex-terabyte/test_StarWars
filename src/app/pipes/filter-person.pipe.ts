import { Pipe, PipeTransform } from '@angular/core';
import { IPeople } from '../models/people';

@Pipe({
  name: 'filterPerson',
})
export class FilterPersonPipe implements PipeTransform {
  transform(residents: IPeople[], search: string): IPeople[] {
    return residents.filter((r) =>
      r.gender.toLowerCase().includes(search.toLowerCase())
    );
  }
}
