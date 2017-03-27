import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../registry-item';

@Component({
  selector: 'ld-registry-item',
  templateUrl: './registry-item.component.html'
})
export class RegistryItemComponent implements OnInit {

  @Input() registryItem: RegistryItem;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  toogleEditable() {
    this.registryItem.editable = !this.registryItem.editable;
  }

  formatDate(date: Date) {
    return Factory.getInstance().getDateFunctionsObject().defaultFormat(date);
  }

  getDate(dateStr) {
    return Factory.getInstance().getDateFunctionsObject().getDate(dateStr);
  }

}
