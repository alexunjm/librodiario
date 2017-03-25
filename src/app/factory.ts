import { Concept } from './concept';
import { PaymentType } from './payment-type';
import { Registry } from './registry';

export class Factory {

  private constructor() {}

  public static getInstance(): Factory {
    return new Factory();
  }

  public getSampleRegistry(): Registry {
    return new Registry(
      'fecha',
      this.getSampleConcept(),
      'descripcion',
      'debito',
      'credito',
      this.getSamplePayment()
    );
  }

  public getEmptyRegistry(): Registry {
    return new Registry(
      '',
      '',
      '',
      '',
      '',
      ''
    );
  }

  public getSampleConcept(): Concept {
    return new Concept('Ingreso');
  }

  public getSamplePayment(): PaymentType {
    return new PaymentType('Banco');
  }

  public getSampleConceptList(): Array<Concept> {
    return [
      new Concept('Ingreso'),
      new Concept('Egreso'),
      new Concept('Préstamo'),
      new Concept('Compra'),
      new Concept('Venta')
    ];
  }

  public getSamplePaymentList(): Array<PaymentType> {
    return [
      new PaymentType('Banco'),
      new PaymentType('Caja'),
      new PaymentType('Cuentas por Pagar'),
      new PaymentType('Cuentas por Cobrar')
    ];
  }
}
