import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navItemsList: any[] = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Tickets',
      path: 'tickets',
    },
    {
      name: 'Store',
      path: 'store',
    },
    {
      name: 'Contact',
      path: 'contact',
    },
  ];
}
