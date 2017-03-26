import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { RegistryItemComponent } from './month/registry-item.component';
import { CuentasPorCobrarComponent } from './cuentas-por-cobrar/cuentas-por-cobrar.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { TabsComponent } from './tabs/tabs.component';
import { RegistryItemCxcComponent } from './cuentas-por-cobrar/registry-item-cxc.component';
import { RegistryItemCxpComponent } from './cuentas-por-pagar/registry-item-cxp.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    RegistryItemComponent,
    CuentasPorCobrarComponent,
    CuentasPorPagarComponent,
    TabsComponent,
    RegistryItemCxcComponent,
    RegistryItemCxpComponent
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
