import { Component, OnInit } from '@angular/core';
import { PainelGestaoService } from '../../services/painel-gestao.service';
import { Alerta } from '../../models/alerta';

@Component({
  selector: 'app-srm-alerta',
  templateUrl: './srm-alerta.component.html',
  styleUrls: ['./srm-alerta.component.scss']
})
export class SrmAlertaComponent implements OnInit {
  alertas: Array<Alerta>;
  constructor(private services:PainelGestaoService) { }

  ngOnInit() {
    this.alertas = this.services.getAlertas();
  }
  adicinar(item: Alerta) {
    item.quantidade += 1;
  }

  remover(item: Alerta) {
    if (item.quantidade > 0) {
      item.quantidade -= 1;
    }
  }
}
