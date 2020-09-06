import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NZ_I18N, th_TH } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: th_TH }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
