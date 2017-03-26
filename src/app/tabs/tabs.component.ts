import { Component, OnInit } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  public tab = 1;
  public month: string;
  registryList: Array<Registry>;

  constructor() {
    this.month = Factory.getInstance().getDateFunctionsObject().getMonth(new Date());
    this.registryList = [];
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
