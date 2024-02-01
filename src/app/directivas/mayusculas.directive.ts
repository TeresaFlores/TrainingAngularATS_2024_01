import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMayusculas]',
})
export class MayusculasDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let valorEnMayusculas: string = this.el.nativeElement.value.toUpperCase();
    this.el.nativeElement.value = valorEnMayusculas;
  }
}
