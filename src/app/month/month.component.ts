import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../registry-item';
import { ListManager } from '../list-manager';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'ld-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {

  @Input() registryItemList: Array<RegistryItem>;
  @Input() listManager: ListManager;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

  newRegistryItem() {
    this.registryItemList.push(Factory.getInstance().getEmptyRegistryItem());
  }

}
