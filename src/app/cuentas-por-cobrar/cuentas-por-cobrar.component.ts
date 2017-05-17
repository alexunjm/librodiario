import { Component, OnInit, DoCheck, Input } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../models/registry-item';
import { PaymentType } from '../models/payment-type';

@Component({
  selector: 'ld-cuentas-por-cobrar',
  templateUrl: './cuentas-por-cobrar.component.html'
})
export class CuentasPorCobrarComponent implements DoCheck {

  @Input() registryItemList: Array<RegistryItem>;
  registryItemCxcList: Array<RegistryItem>;

  constructor() { }

  ngDoCheck() {
    this.registryItemCxcList = this.registryItemList.filter(this.byPaymentTypeCxc, this);
  }

  byPaymentTypeCxc(registryItem: RegistryItem) {
    return registryItem.registry.paymentType && registryItem.registry.paymentType.cxc;
  }

  newRegistryItem() {
    this.registryItemList.push(Factory.getInstance().getEmptyRegistryItemCxc());
  }

}
