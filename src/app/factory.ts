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
    return this.getRegistryItem(new Registry(
      new Date(),
      this.conceptList[0],
      null,
      null,
      null,
      null
    ));
  }

  public getEmptyRegistryItemCxc(): RegistryItem {
    const emptyRI = this.getEmptyRegistryItem();
    emptyRI.registry.concept = this.conceptList.filter(c => c.credit)[0];
    emptyRI.registry.paymentType = this.paymentTypeList.filter(pt => pt.cxc)[0];
    return emptyRI;
  }

  public getEmptyRegistryItemCxp(): RegistryItem {
    const emptyRI = this.getEmptyRegistryItem();
    emptyRI.registry.concept = this.conceptList.filter(c => !c.credit)[0];
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

  public getRegistryItem(registry: Registry): RegistryItem {
    const rItem = new RegistryItem(true);
    rItem.registry = registry;
    return rItem;
  }

  public getRegistryItemList(registryList: Registry[]): RegistryItem[] {
    return registryList.map(
      obj => {
        const rItem = new RegistryItem(true);
        rItem.setRegistry(obj);
        return rItem;
      }
    );
  }
}
