import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoletosComponent } from './components/boletos/boletos.component';
import { AlimentosComponent } from './components/alimentos/alimentos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleComboComponent } from './components/alimentos/detalle-combo/detalle-combo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boletos', component: BoletosComponent },
  { path: 'alimentos', component: AlimentosComponent },
  { path: 'alimentos/combos/:id', component: DetalleComboComponent },
  { path: 'contacto', component: ContactoComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
