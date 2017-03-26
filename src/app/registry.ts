export class Registry {

  public document: string;
  public chargeDate: Date;
  public paymentDate: Date;

  constructor(public date, public concept, public description, public debit, public credit, public paymentType) {}

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
