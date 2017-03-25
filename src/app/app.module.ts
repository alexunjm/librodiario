import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MonthComponent } from './month/month.component';
import { RegistryItemComponent } from './month/registry-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    RegistryItemComponent
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
