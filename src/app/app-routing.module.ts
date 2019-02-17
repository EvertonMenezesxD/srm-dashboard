import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SrmPainelGestaoComponent } from './srm-painel-gestao/srm-painel-gestao.component';
import { SrmRecebiveisComponent } from './srm-recebiveis/srm-recebiveis.component';
import { SrmContaDigitalComponent } from './srm-conta-digital/srm-conta-digital.component';

const routes: Routes = [
  { path: 'painel', component: SrmPainelGestaoComponent },
  { path: 'conta', component: SrmContaDigitalComponent },
  { path: 'recebiveis', component: SrmRecebiveisComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
