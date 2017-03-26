import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {

  @Input() registryList: Array<Registry>;

  constructor() {
  }

  ngOnInit() {
  }

  newRegistry() {
    this.registryList.push(Factory.getInstance().getEmptyRegistry());
  }

}
