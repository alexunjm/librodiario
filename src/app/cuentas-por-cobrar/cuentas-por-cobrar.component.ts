import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-cuentas-por-cobrar',
  templateUrl: './cuentas-por-cobrar.component.html'
})
export class CuentasPorCobrarComponent implements OnInit {

  @Input() registryList: Array<Registry>;

  constructor() { }

  ngOnInit() {
  }

}
