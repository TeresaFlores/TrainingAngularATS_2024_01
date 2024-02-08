import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaModel } from '@core/models/Pelicula.interface';
import { EventTypes } from '@core/models/toast.interface';
import { Store } from '@ngrx/store';
import { ToastService } from '@services/toast.service';
import { AppState } from '@state/app.state';
import { selectPelicula } from '@state/selectors/peliculas.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boletos',
  templateUrl: './boletos.component.html',
  styleUrls: ['./boletos.component.css'],
})
export class BoletosComponent implements OnInit {
  peliculaInfo$: Observable<any> = new Observable();
  newPeliculaInfo: PeliculaModel | null = null;
  peliculaId: number = 0;
  funcion: string | null = null;
  mensaje: Record<string, string | unknown> | null = null;
  boletosForm: FormGroup = new FormGroup(
    {
      adulto: new FormControl(''),
      nino: new FormControl(''),
      eraEdad: new FormControl(''),
    },
    { validators: this.validadorPersonalizado() }
  );

  constructor(
    private toastService: ToastService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  validadorPersonalizado(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const adultoControl = control.get('adulto');
      const ninoControl = control.get('nino');
      const eraEdadControl = control.get('eraEdad');
      if (!adultoControl || !ninoControl || !eraEdadControl) {
        return null;
      }

      const adultoValor = Number(adultoControl.value);
      const ninoValor = Number(ninoControl.value);
      const eraEdadValor = Number(eraEdadControl.value);

      if (adultoValor > 0 || ninoValor > 0 || eraEdadValor > 0) {
        return { validacionPersonalizada: true };
      }
      return null;
    };
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.peliculaId = Number(params.get('peliculaId'));
      this.funcion = params.get('horario');
      if (!this.peliculaId) {
        this.router.navigate(['/']);
      }
    });
    this.peliculaInfo$ = this.store.select(selectPelicula(this.peliculaId));
  }

  get getBoletoForm() {
    return {
      form: this.boletosForm,
    };
  }

  onSubmit() {
    const { adulto, nino, eraEdad } = this.boletosForm.value;
    this.peliculaInfo$.subscribe((value) => {
      this.newPeliculaInfo = value;
    });
    this.mensaje = {
      pelicula: this.newPeliculaInfo?.nombre,
      funcion: this.funcion,
      boletos: `Boletos: ${adulto && `Adulto(${adulto})`} ${
        nino && `Niños(${nino})`
      } ${eraEdad && `3era Edad(${eraEdad})`}`,
      total: (adulto | 0) * 50 + (nino | 0) * 45 + (eraEdad | 0) * 45,
    };

    this.toastService.showToast(
      EventTypes.Success,
      'Compra exitosa, puede revisar los datos más abajo.'
    );
  }
}
