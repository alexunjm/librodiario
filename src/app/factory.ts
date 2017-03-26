import { Concept } from './concept';
import { PaymentType } from './payment-type';
import { Registry } from './registry';
import { RegistryItem } from './registry-item';
import { DateFunctions } from './date-functions';
import { ListManager } from './list-manager';

export class Factory {

  private static _instace: Factory;

  private conceptList: Array<Concept>;
  private paymentTypeList: Array<PaymentType>;

  private constructor() {

    this.conceptList = [
      new Concept('Ingreso', true),
      new Concept('Egreso', false),
      new Concept('Préstamo', false),
      new Concept('Compra', false),
      new Concept('Venta', true)
    ];
    this.paymentTypeList = [
      new PaymentType('Banco', false, false),
      new PaymentType('Caja', false, false),
      new PaymentType('Cuentas por Pagar', false, true),
      new PaymentType('Cuentas por Cobrar', true, false)
    ];
  }

  public static getInstance(): Factory {
    if(!Factory._instace) {
      Factory._instace = new Factory();
    }
    return Factory._instace;
  }

  public getEmptyRegistryItem(): RegistryItem {
    const rItem = new RegistryItem(true);
    rItem.registry = new Registry(
      new Date(),
      null,
      null,
      null,
      null,
      null
    );
    return rItem;
  }

  public getEmptyRegistryItemCxc(): RegistryItem {
    const emptyRI = this.getEmptyRegistryItem();
    emptyRI.registry.paymentType = this.paymentTypeList.filter(pt => pt.cxc)[0];
    return emptyRI;
  }

  public getEmptyRegistryItemCxp(): RegistryItem {
    const emptyRI = this.getEmptyRegistryItem();
    emptyRI.registry.paymentType = this.paymentTypeList.filter(pt => pt.cxp)[0];
    return emptyRI;
  }

  public getListManagerObject(): ListManager {
    const lm = new ListManager();
    lm.conceptList = this.conceptList;
    lm.paymentTypeList = this.paymentTypeList;
    return lm;
  }

  public getDateFunctionsObject(): DateFunctions {
    return DateFunctions.getInstance();
  }
}
