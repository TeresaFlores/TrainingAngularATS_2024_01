import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@state/app.state';
import { selectCombos } from '@state/selectors/carrito.selector';
import { ToastService } from '@services/toast.service';
import { pagarCarrito } from '@state/actions/carrito.actions';
import { EventTypes } from '@core/models/toast.interface';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
})
export class DrawerComponent implements OnInit {
  listaCombos$: Observable<any> | null = new Observable();
  sumaTotal$: Observable<any> | null = new Observable();

  constructor(
    private toastService: ToastService,
    private store: Store<AppState>
  ) {}

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

  cobrarCarrito() {
    this.store.dispatch(pagarCarrito());
    this.toastService.showToast(EventTypes.Success, 'Pago exitoso.');
  }
}
