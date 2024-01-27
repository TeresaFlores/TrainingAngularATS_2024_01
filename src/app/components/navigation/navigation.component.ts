import { Component, Input } from '@angular/core';
import { NavLink } from 'src/app/models/ui.defs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() links: NavLink[] = []
}
