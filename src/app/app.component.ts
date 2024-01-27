import { Component } from '@angular/core';
import { NavLink } from './models/ui.defs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public businessName = "Home Cinema"
  public navBarNavigationLinks: NavLink[] = [
    { path: '/', txt: 'Home' },
    { path: '/tickets', txt: 'Boletos' },
    { path: '/snacks', txt: 'Alimentos' },
    { path: '/contact', txt: 'Contacto' },
  ]
}
