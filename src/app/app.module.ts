import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SrmPainelGestaoComponent } from './srm-painel-gestao/srm-painel-gestao.component';
import { SrmContaDigitalComponent } from './srm-conta-digital/srm-conta-digital.component';
import { SrmRecebiveisComponent } from './srm-recebiveis/srm-recebiveis.component';
import { SrmNavbarComponent } from './srm-navbar/srm-navbar.component';
import { SrmSidebarComponent } from './srm-sidebar/srm-sidebar.component';
import { SrmAlertaComponent } from './srm-painel-gestao/srm-alerta/srm-alerta.component';
import { SrmAtalhoComponent } from './srm-painel-gestao/srm-atalho/srm-atalho.component';
import { PainelGestaoService } from './services/painel-gestao.service';

@NgModule({
  declarations: [
    AppComponent,
    SrmPainelGestaoComponent,
    SrmContaDigitalComponent,
    SrmRecebiveisComponent,
    SrmNavbarComponent,
    SrmSidebarComponent,
    SrmAlertaComponent,
    SrmAtalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PainelGestaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
