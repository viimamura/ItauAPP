import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'paises', pathMatch: 'full' },
  { path: 'paises', component: ListaComponent },
  { path: 'paises/:codigoISO', component: DetalhesComponent },
  { path: 'adicionar', component: AdicionarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
