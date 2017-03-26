import { Component, OnInit } from '@angular/core';
import { Factory } from '../factory';
import { Registry } from '../registry';

@Component({
  selector: 'ld-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit {

  public tab: number = 1;
  public month: string;
  registryList: Array<Registry>;

  constructor() {
    this.month = Factory.getInstance().getDateFunctionsObject().getMonth(new Date());
    this.registryList = [];
    this.registryList.push(Factory.getInstance().getSampleRegistry());
    this.registryList.push(Factory.getInstance().getSampleRegistry());
  }

  ngOnInit() {
  }

	public isSet = function(checkTab) {
		return this.tab === checkTab;
	};

	public setTab = function(activeTab) {
		this.tab = activeTab;
	};

}
