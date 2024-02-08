import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { totalItems } from '@state/selectors/carrito.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-icono-btn',
  templateUrl: './icono-btn.component.html',
  styleUrls: ['./icono-btn.component.css'],
})
export class IconoBtnComponent implements OnInit {
  totalItems$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.totalItems$ = this.store.select(totalItems);
  }
}
