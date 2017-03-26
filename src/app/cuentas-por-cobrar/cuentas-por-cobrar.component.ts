import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';
import { PaymentType } from '../payment-type';

@Component({
  selector: 'ld-cuentas-por-cobrar',
  templateUrl: './cuentas-por-cobrar.component.html'
})
export class CuentasPorCobrarComponent implements DoCheck {

  @Input() registryList: Array<Registry>;
  registryCxcList: Array<Registry>;

  constructor() { }

  ngDoCheck() {
    this.registryCxcList = this.registryList.filter(this.byPaymentTypeCxc, this);
  }

  byPaymentTypeCxc(registry: Registry) {
    return registry.paymentType && registry.paymentType.cxc;
  }

  newRegistry() {
    this.registryList.push(Factory.getInstance().getEmptyRegistryCxc());
  }

}
