import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { MonthComponent } from './month/month.component';
import { RegistryItemMonthComponent } from './month/registry-item-month.component';
import { CuentasPorCobrarComponent } from './cuentas-por-cobrar/cuentas-por-cobrar.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { RegistryItemCxcComponent } from './cuentas-por-cobrar/registry-item-cxc.component';
import { RegistryItemCxpComponent } from './cuentas-por-pagar/registry-item-cxp.component';
import { RegistryItemComponent } from './registry-item/registry-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MonthComponent,
    RegistryItemMonthComponent,
    CuentasPorCobrarComponent,
    CuentasPorPagarComponent,
    RegistryItemCxcComponent,
    RegistryItemCxpComponent,
    RegistryItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
