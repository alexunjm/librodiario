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
  payment: PaymentType;

  constructor() {
    this.payment = Factory.getInstance().getPaymentObject('Cuentas por Cobrar');
  }

  ngDoCheck() {
    this.registryCxcList = this.registryList.filter(this.byPaymentTypeName, this);
  }

  byPaymentTypeName(registry: Registry) {
    return registry.paymentType.name === this.payment.name;
  }

}
