import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalizarPalabra]',
})
export class CapitalizarPalabraDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    let valor: string = this.el.nativeElement.value;
    this.el.nativeElement.value = this.capitalizarPalabras(valor);
  }

  private capitalizarPalabras(input: string): string {
    return input.replace(/\b\w/g, (match) => match.toUpperCase());
  }
}
