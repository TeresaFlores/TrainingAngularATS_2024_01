import { Component } from '@angular/core';

interface NavOptionInterface {
  text: string;
  link: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navOptions: NavOptionInterface[] = [
    { text: 'Boletos', link: '/boletos' },
    { text: 'Alimentos', link: '/alimentos' },
    { text: 'Contacto', link: '/contacto' },
  ];
}
