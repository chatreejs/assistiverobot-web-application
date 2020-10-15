import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AuthenticationModule } from './authentication/authentication.module';
import {
  AUTHENTICATION_CONFIG,
  GENERAL_ENVIRONMENT_CONFIG,
  WEB_SERVICE_CONFIG
} from './core/provider-name-token';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';

import { Result403ForbiddenComponent } from './result403forbidden/result403forbidden.component';
import { Result404NotfoundComponent } from './result404notfound/result404notfound.component';

import { NZ_I18N, th_TH, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import th from '@angular/common/locales/th';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(th);

@NgModule({
  declarations: [
    AppComponent,
    Result403ForbiddenComponent,
    Result404NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,

    NzResultModule,
    NzButtonModule
  ],
  providers: [
    { provide: GENERAL_ENVIRONMENT_CONFIG, useValue: environment },
    { provide: WEB_SERVICE_CONFIG, useValue: environment },
    { provide: AUTHENTICATION_CONFIG, useValue: environment },
    { provide: NZ_I18N, useValue: th_TH },
    { provide: NZ_DATE_LOCALE, useValue: th }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
