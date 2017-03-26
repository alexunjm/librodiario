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
  payment: PaymentType;

  constructor() {
    this.payment = Factory.getInstance().getPaymentObject('Cuentas por Pagar');
  }

  ngDoCheck() {
    this.registryCxpList = this.registryList.filter(this.byPaymentTypeName, this);
  }

  byPaymentTypeName(registry: Registry) {
    return registry.paymentType.name === this.payment.name;
  }

}
