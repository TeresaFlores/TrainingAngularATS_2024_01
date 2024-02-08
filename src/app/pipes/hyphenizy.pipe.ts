import { Pipe, PipeTransform } from '@angular/core';
import { convertToHyphens } from '../utils/utils';

@Pipe({
  name: 'hyphenizy',
})
export class HyphenizyPipe implements PipeTransform {
  transform(value: string): string {
    return convertToHyphens(value.toLowerCase());
  }
}
