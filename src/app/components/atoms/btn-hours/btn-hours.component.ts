import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-hours',
  templateUrl: './btn-hours.component.html',
  styleUrls: ['./btn-hours.component.scss']
})
export class BtnHoursComponent {
  @Input() hour!: string;
}
