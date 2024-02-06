import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aside-combos',
  templateUrl: './aside-combos.component.html',
  styleUrls: ['./aside-combos.component.scss']
})
export class AsideCombosComponent {
  @Input() listCombos!: any[];
}
