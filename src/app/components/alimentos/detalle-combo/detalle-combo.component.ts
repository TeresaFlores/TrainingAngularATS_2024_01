import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboModel } from '@core/models/Alimentos.interface';
import { CarritoCombosModel } from '@core/models/Carrito.interface';
import { Store } from '@ngrx/store';
import { agregarCombo } from '@state/actions/carrito.actions';
import { AppState } from '@state/app.state';
import { selectCombo } from '@state/selectors/alimentos.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-combo',
  templateUrl: './detalle-combo.component.html',
  styleUrls: ['./detalle-combo.component.css'],
})
export class DetalleComboComponent implements OnInit {
  comboInfo$: Observable<any> = new Observable();
  comboInfoValue!: ComboModel;
  comboId: number | null = null;
  factor: number = 1;

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.comboId = Number(params.get('id'));
    });
    if (this.comboId) {
      this.comboInfo$ = this.store.select(selectCombo(this.comboId));
    }
  }

  agregarCarrito() {
    this.comboInfo$.subscribe((value) => (this.comboInfoValue = value));
    const payload = {
      comboInfo: this.comboInfoValue,
      cantidad: this.factor,
      total: this.factor * this.comboInfoValue.precio,
    };

    this.store.dispatch(agregarCombo({ payload }));
  }
}
//selectCombo
