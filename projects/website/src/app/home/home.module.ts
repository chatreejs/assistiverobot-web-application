import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MapFormComponent } from './map-form/map-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CompleteComponent } from './complete/complete.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzResultModule } from 'ng-zorro-antd/result';

import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    MapFormComponent,
    ConfirmComponent,
    CompleteComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,

    NzIconModule,
    NzLayoutModule,
    NzGridModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzTimelineModule,
    NzSelectModule,
    NzButtonModule,
    NzMessageModule,
    NzInputModule,
    NzResultModule,

    CoreModule,
  ]
})
export class HomeModule { }
