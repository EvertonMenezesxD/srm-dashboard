import { Component, OnInit } from '@angular/core';
import { PainelGestaoService } from '../../services/painel-gestao.service';

@Component({
  selector: 'app-srm-atalho',
  templateUrl: './srm-atalho.component.html',
  styleUrls: ['./srm-atalho.component.scss']
})
export class SrmAtalhoComponent implements OnInit {

  constructor(private services: PainelGestaoService) { }

  ngOnInit() {
  }
  add(){
    this.services.updateN(3);
  }
}
