import { Component, Input } from '@angular/core';
import { Combo } from '../../interfaces/combo.interface';

@Component({
  selector: 'combo-component',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent {
  @Input() comboProps?: Combo;
}
