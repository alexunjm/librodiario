import { Registry } from './registry';

export class RegistryItem {

  registry: Registry;

  constructor(public editable: boolean) {}

  setRegistry(obj) {
    console.log(obj);
    this.registry = new Registry(
      new Date(obj.date),
      obj.concept,
      obj.description,
      obj.debit,
      obj.credit,
      obj.paymentType
    );
  }
}
