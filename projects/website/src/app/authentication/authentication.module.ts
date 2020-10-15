import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Requestor, FetchRequestor } from '@openid/appauth';

import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationInceptor } from './authentication.inceptor';
import { AuthenticationService } from './authentication.service';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,

    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzCardModule,
    NzSpinModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    [
      {
        provide: HTTP_INTERCEPTORS,
        userClass: AuthenticationInceptor,
        multi: true
      }
    ],
    {
      provide: Requestor,
      useValue: new FetchRequestor()
    }
  ]
})
export class AuthenticationModule { }
