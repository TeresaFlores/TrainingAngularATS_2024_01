import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComidaComponent } from './pages/comida/comida.component';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/molecules/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'combos', component: ComidaComponent },
  { path: 'contact', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
