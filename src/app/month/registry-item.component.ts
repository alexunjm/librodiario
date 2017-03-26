import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';
import { Concept } from '../concept';
import { PaymentType } from '../payment-type';

@Component({
  selector: 'ld-registry-item',
  templateUrl: './registry-item.component.html',
  styles: []
})
export class RegistryItemComponent implements OnInit {

  @Input() registry: Registry;
  @Input() index: number;
  editable: boolean;
  conceptList: Array<Concept>;
  paymentList: Array<PaymentType>;

  constructor() {
    this.editable = false;
    this.conceptList = Factory.getInstance().getSampleConceptList();
    this.paymentList = Factory.getInstance().getSamplePaymentList();
  }

  ngOnInit() {
  }

  toogleEditable() {
    this.editable = !this.editable;
  }

  formatDate(date: Date) {
    return Factory.getInstance().getDateFunctionsObject().defaultFormat(date);
  }

  getDate(dateStr) {
    return Factory.getInstance().getDateFunctionsObject().getDate(dateStr);
  }

}
