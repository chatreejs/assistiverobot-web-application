import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, th_TH } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import th from '@angular/common/locales/th';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ConfirmComponent } from './Component/confirm/confirm.component';
import { CompleteComponent } from './Component/complete/complete.component';
import { MapFormComponent } from './Component/map-form/map-form.component';
import {PageNotFoundComponent} from './Component/pagenotfound/pagenotfound.component';

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    CompleteComponent,
    MapFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: th_TH }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
