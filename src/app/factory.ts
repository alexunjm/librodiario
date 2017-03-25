import { Concept } from './concept';
import { PaymentType } from './payment-type';
import { Registry } from './registry';
import { DateFunctions } from './date-functions';

export class Factory {

  private static _instace: Factory;

  private sampleConcept: Concept;
  private samplePayment: PaymentType;
  private sampleConceptList: Array<Concept>;
  private samplePaymentList: Array<PaymentType>;

  private constructor() {

    this.sampleConcept = new Concept('Ingreso');
    this.samplePayment = new PaymentType('Banco');
    this.sampleConceptList = [
      this.getSampleConcept(),
      new Concept('Egreso'),
      new Concept('Préstamo'),
      new Concept('Compra'),
      new Concept('Venta')
    ];
    this.samplePaymentList = [
      this.getSamplePayment(),
      new PaymentType('Caja'),
      new PaymentType('Cuentas por Pagar'),
      new PaymentType('Cuentas por Cobrar')
    ];
  }

  public static getInstance(): Factory {
    if(!Factory._instace) {
      Factory._instace = new Factory();
    }
    return Factory._instace;
  }

  public getSampleRegistry(): Registry {
    return new Registry(
      new Date(),
      this.getSampleConcept(),
      'descripcion',
      '',
      '9000',
      this.getSamplePayment()
    );
  }

  public getEmptyRegistry(): Registry {
    return new Registry(
      new Date(),
      this.getSampleConcept(),
      '',
      '',
      '',
      this.getSamplePayment()
    );
  }

  public getSampleConcept(): Concept {
    return this.sampleConcept;
  }

  public getSamplePayment(): PaymentType {
    return this.samplePayment;
  }

  public getSampleConceptList(): Array<Concept> {
    return this.sampleConceptList;
  }

  public getSamplePaymentList(): Array<PaymentType> {
    return this.samplePaymentList;
  }

  public getDateFunctionsObject():DateFunctions {
    return DateFunctions.getInstance();
  }
}
