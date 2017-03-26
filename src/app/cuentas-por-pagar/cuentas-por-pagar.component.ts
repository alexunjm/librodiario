import { Component, DoCheck, Input } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../registry-item';
import { PaymentType } from '../payment-type';

@Component({
  selector: 'ld-cuentas-por-pagar',
  templateUrl: './cuentas-por-pagar.component.html'
})
export class CuentasPorPagarComponent implements DoCheck {

  @Input() registryItemList: Array<RegistryItem>;
  registryItemCxpList: Array<RegistryItem>;

  constructor() { }

  ngDoCheck() {
    this.registryItemCxpList = this.registryItemList.filter(this.byPaymentTypeCxp, this);
  }

  byPaymentTypeCxp(registryItem: RegistryItem) {
    return registryItem.registry.paymentType && registryItem.registry.paymentType.cxp;
  }

  newRegistryItem() {
    this.registryItemList.push(Factory.getInstance().getEmptyRegistryItemCxp());
  }

}
