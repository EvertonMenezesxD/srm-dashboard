import { Injectable } from '@angular/core';
import { Alerta } from '../models/alerta';

@Injectable()
export class PainelGestaoService {
  alertas: Array<Alerta> = new Array<Alerta>();
 
  constructor() { }

  getAlertas() : Alerta[]
  {
    this.alertas = [];
    
    let alerta1 = new Alerta();
    alerta1.id = 1;
    alerta1.tipoNota = 'Notas canceladas';
    alerta1.quantidade = 23;
    alerta1.flacao = false;
    this.alertas.push(alerta1);
    
    let alerta2 = new Alerta();
    alerta2.id = 2;
    alerta2.tipoNota = 'Notas canceladas';
    alerta2.quantidade = 13;
    alerta2.flacao = true;
    this.alertas.push(alerta2);
    
    let alerta3 = new Alerta();
    alerta3.id = 3;
    alerta3.tipoNota = 'Assinatura Digital';
    alerta3.quantidade = 7;
    alerta3.flacao = true;
    this.alertas.push(alerta3);

    return this.alertas;

  }

  updateN(id:number)
  {
    let alerta = this.alertas.find( x => x.id == id);
    console.log(alerta);
    alerta.quantidade += 1;
  }


}
