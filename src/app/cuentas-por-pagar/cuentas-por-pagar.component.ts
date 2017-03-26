import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-cuentas-por-pagar',
  templateUrl: './cuentas-por-pagar.component.html'
})
export class CuentasPorPagarComponent implements OnInit {

  @Input() registryList: Array<Registry>;

  constructor() { }

  ngOnInit() {
  }

}
