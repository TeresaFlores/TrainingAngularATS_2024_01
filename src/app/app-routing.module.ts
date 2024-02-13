import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ContactoPageComponent } from './contacto/pages/contacto-page/contacto-page.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'boletos', loadChildren: () => import('./boletos/boletos.module').then(m => m.BoletosModule)},
  { path: 'alimentos', loadChildren: () => import('./alimentos/alimentos.module').then(m => m.AlimentosModule)},
  { path: 'contacto', component: ContactoPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
