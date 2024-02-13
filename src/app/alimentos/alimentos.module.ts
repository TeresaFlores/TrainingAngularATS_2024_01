import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentosPageComponent } from './pages/alimentos-page/alimentos-page.component';
import { AlimentosRoutingModule } from './alimentos-routing.module';
import { ComboComponent } from './components/combo/combo.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComboDetalleComponent } from './pages/combo-detalle/combo-detalle.component';



@NgModule({
  declarations: [
    AlimentosPageComponent,
    ComboComponent,
    ComboDetalleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AlimentosPageComponent,
    AlimentosRoutingModule
  ]
})
export class AlimentosModule { }
