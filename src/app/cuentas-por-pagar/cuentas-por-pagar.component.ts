import { Component, DoCheck, Input } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';
import { PaymentType } from '../payment-type';

@Component({
  selector: 'ld-cuentas-por-pagar',
  templateUrl: './cuentas-por-pagar.component.html'
})
export class CuentasPorPagarComponent implements DoCheck {

  @Input() registryList: Array<Registry>;
  registryCxpList: Array<Registry>;

  constructor() { }

  ngDoCheck() {
    this.registryCxpList = this.registryList.filter(this.byPaymentTypeCxp, this);
  }

  byPaymentTypeCxp(registry: Registry) {
    return registry.paymentType && registry.paymentType.cxp;
  }

  newRegistry() {
    this.registryList.push(Factory.getInstance().getEmptyRegistryCxp());
  }

}
