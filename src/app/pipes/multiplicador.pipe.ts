import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador',
})
export class MultiplicadorPipe implements PipeTransform {
  transform(valor: number, factor: number): number {
    return valor * factor;
  }
}
