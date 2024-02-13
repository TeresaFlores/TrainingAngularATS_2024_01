import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlimentosPageComponent } from './pages/alimentos-page/alimentos-page.component';
import { ComboDetalleComponent } from './pages/combo-detalle/combo-detalle.component';

const routes: Routes = [
  { path: '', component: AlimentosPageComponent },
  { path: 'combo/:id', component: ComboDetalleComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AlimentosRoutingModule { }
