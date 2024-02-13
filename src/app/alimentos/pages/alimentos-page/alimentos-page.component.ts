import { Component, OnDestroy, OnInit } from '@angular/core';
import { Combo } from '../../interfaces/combo.interface';
import { Subscription, catchError, of } from 'rxjs';
import { ComboService } from '../../services/combo.service';

@Component({
  selector: 'alimentos-page',
  templateUrl: './alimentos-page.component.html',
  styleUrls: ['./alimentos-page.component.css']
})
export class AlimentosPageComponent implements OnInit, OnDestroy {
  public combos: Combo[] = [];
  public isLoading: boolean = false;
  public combosSubscription?: Subscription;

  constructor(private comboService: ComboService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.combosSubscription = this.comboService.getData()
    .pipe(
      catchError(error => {
        console.log('Error al obtener los combos.', error);
        this.isLoading = false;
        return of([]);
      })
    )
    .subscribe((combos) => {
      this.combos = combos;
      this.isLoading = false;
      console.log(this.combos);
    });
  }

  ngOnDestroy(): void {
      this.combosSubscription?.unsubscribe();
  }

}
