import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css']
})
export class CinesComponent {
  @Input() listCines!: any[];
}
