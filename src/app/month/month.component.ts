import { Component, OnInit } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {

  registryList: Array<Registry>;

  constructor() {
    this.registryList = [];
    this.registryList.push(Factory.getInstance().getSampleRegistry());
    this.registryList.push(Factory.getInstance().getSampleRegistry());
  }

  ngOnInit() {
  }

  newRegistry() {
    this.registryList.push(Factory.getInstance().getEmptyRegistry());
  }

}
