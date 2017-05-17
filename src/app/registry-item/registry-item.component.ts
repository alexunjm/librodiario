import { Component, OnInit, Input } from '@angular/core';
import { Factory } from '../factory';
import { RegistryItem } from '../models/registry-item';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'ld-registry-item',
  templateUrl: './registry-item.component.html'
})
export class RegistryItemComponent implements OnInit {

  @Input() registryItem: RegistryItem;
  @Input() index: number;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  toogleEditable() {
    this.httpService.insertData(this.registryItem.registry).subscribe(
      (data: Response) => console.log(data)
    );
    this.registryItem.editable = !this.registryItem.editable;
  }

  formatDate(date: Date) {
    return Factory.getInstance().getDateFunctionsObject().defaultFormat(date);
  }

  getDate(dateStr) {
    return Factory.getInstance().getDateFunctionsObject().getDate(dateStr);
  }

}
