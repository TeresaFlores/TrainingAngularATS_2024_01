import { Observable, map, reduce } from 'rxjs';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { selectCombos } from '@state/selectors/carrito.selector';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  listaCombos$: Observable<any> | null = new Observable();
  sumaTotal$: Observable<any> | null = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.listaCombos$ = this.store.select(selectCombos);
    this.sumaTotal$ = this.listaCombos$.pipe(
      map((objetos) =>
        objetos.map((objeto: { total: number }) => objeto.total)
      ),
      map((totales) =>
        totales.reduce((acc: number, valor: number) => acc + valor, 0)
      )
    );
  }
}
