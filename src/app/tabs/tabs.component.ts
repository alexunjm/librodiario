import { Component, OnInit } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../registry-item';
import { ListManager } from '../list-manager';

@Component({
  selector: 'ld-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  public tab = 1;
  public month: string;
  registryItemList: Array<RegistryItem>;
  listManager: ListManager;

  constructor() {
    this.month = Factory.getInstance().getDateFunctionsObject().getMonth(new Date());
    this.listManager = Factory.getInstance().getListManagerObject();
    this.registryItemList = [];
    const empty = Factory.getInstance().getEmptyRegistryItem();
    empty.editable = false;
    this.registryItemList.push(empty);
  }

  ngOnInit() {
  }

  public isSet(checkTab) {
    return this.tab === checkTab;
  };

  public setTab(activeTab) {
    this.tab = activeTab;
  };

}
