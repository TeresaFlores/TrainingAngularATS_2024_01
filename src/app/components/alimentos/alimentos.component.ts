import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarAlimentos } from '@state/actions/alimentos.actions';
import { selectListaAlimentos } from '@state/selectors/alimentos.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css'],
})
export class AlimentosComponent implements OnInit {
  listaCombos$: Observable<any> = new Observable();

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(cargarAlimentos());
    this.listaCombos$ = this.store.select(selectListaAlimentos);
  }
}
