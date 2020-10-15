import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Requestor, FetchRequestor } from '@openid/appauth';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AuthenticationInceptor } from './authentication.inceptor';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AuthenticationGuard } from './authentication.guard';


@NgModule({
  declarations: [
    LoginComponent
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
    NzCardModule
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
