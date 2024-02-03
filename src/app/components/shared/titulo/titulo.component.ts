import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css'],
})
export class TituloComponent {
  @Input() texto: string = '';
  @Input() classes: string = '';
}
