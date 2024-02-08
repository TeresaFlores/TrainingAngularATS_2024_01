import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { selectBoletos } from '@state/selectors/carrito.selector';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  listaBoletos$: Observable<any> | null = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listaBoletos$ = this.store.select(selectBoletos);
  }
}
