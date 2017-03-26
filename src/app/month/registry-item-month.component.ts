import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RegistryItemComponent } from '../registry-item/registry-item.component';
import { ListManager } from '../list-manager';

@Component({
  selector: 'ld-registry-item-month',
  templateUrl: './registry-item-month.component.html',
  styles: []
})
export class RegistryItemMonthComponent extends RegistryItemComponent {

  @Input() listManager: ListManager;

}
