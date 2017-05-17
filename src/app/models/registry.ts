import { Concept } from './concept';
import { PaymentType } from './payment-type';

export class Registry {

  public document: string;
  public chargeDate: Date;
  public paymentDate: Date;

  constructor(public date: Date, public concept: Concept, public description: string,
    public debit: number, public credit: number, public paymentType: PaymentType) {}

  /*
    var sample: Registry = {
      date: 'fecha',
      concept: 'concepto',
      description: 'descripcion',
      debit: 'debito',
      credit: 'credito',
      paymentType: 'forma de pago'
    };*/
}
