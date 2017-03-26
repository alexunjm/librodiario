import { Concept } from './concept';
import { PaymentType } from './payment-type';
import { Registry } from './registry';
import { DateFunctions } from './date-functions';

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

  public getEmptyRegistry(): Registry {
    return new Registry(
      new Date(),
      null,
      null,
      null,
      null,
      null
    );
  }

  public getEmptyRegistryCxc(): Registry {
    const emptyR = this.getEmptyRegistry();
    emptyR.paymentType = new PaymentType('Cuentas por Cobrar', true, false);
    return emptyR;
  }

  public getEmptyRegistryCxp(): Registry {
    const emptyR = this.getEmptyRegistry();
    emptyR.paymentType = new PaymentType('Cuentas por Pagar', false, true);
    return emptyR;
  }

  public getConceptList(): Array<Concept> {
    return this.conceptList;
  }

  public getPaymentTypeList(): Array<PaymentType> {
    return this.paymentTypeList;
  }

  public getDateFunctionsObject(): DateFunctions {
    return DateFunctions.getInstance();
  }
}
