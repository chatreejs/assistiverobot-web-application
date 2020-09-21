import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LocationComponent } from './location/location.component';
import { JobComponent } from './job/job.component';
import { UmComponent } from './um/um.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [
    AdminComponent,
    LocationComponent,
    JobComponent,
    UmComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
  ]
})
export class AdminModule { }
