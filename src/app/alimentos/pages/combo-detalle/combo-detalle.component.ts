import { Component, OnDestroy, OnInit } from '@angular/core';
import { Combo } from '../../interfaces/combo.interface';
import { Subscription, catchError, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ComboService } from '../../services/combo.service';
import { CarritoService } from 'src/app/carrito/services/carrito.service';

@Component({
  selector: 'combo-detalle',
  templateUrl: './combo-detalle.component.html',
  styleUrls: ['./combo-detalle.component.css']
})
export class ComboDetalleComponent implements OnInit, OnDestroy {
  public combo?: Combo;
  public isLoading: boolean = false;
  private comboSubscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private comboService: ComboService,
    private router: Router,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.comboSubscription = this.activatedRoute.params
   .pipe(
    switchMap( ({ id }) => this.comboService.getCombo(id)),
    catchError(error => {
      console.error('Combo no encontrado', error);
      this.isLoading = false;
      return of(null);
    })
   )
   .subscribe((combo) => {
    this.isLoading = false;
    if(!combo){
      this.router.navigateByUrl('');
    } else {
      this.combo = combo;
    }
  });
}

agregarAlimento(combo: Combo) {
  this.carritoService.agregarAlimento(combo);
  console.log('Combo agregado al carrito', combo);
}

  ngOnDestroy(): void {
    this.comboSubscription?.unsubscribe();
  }
}
