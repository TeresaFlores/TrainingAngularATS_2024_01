import { Component, Input } from '@angular/core';
import { NavLink } from 'src/app/models/ui.defs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() businessName: String = 'HVCinema'
  @Input() navLinks: NavLink[] = []
}

