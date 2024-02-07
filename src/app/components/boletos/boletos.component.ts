import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
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
  peliculaId: number = 0;
  boletosForm: FormGroup = new FormGroup(
    {
      adulto: new FormControl(''),
      nino: new FormControl(''),
      eraEdad: new FormControl(''),
    },
    { validators: this.validadorPersonalizado() }
  );

  constructor(
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
}
