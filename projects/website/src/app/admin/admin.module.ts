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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
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
    NzButtonModule,
    NzCheckboxModule,
    NzRadioModule,
    NzTableModule,
    NzIconModule,
    NzToolTipModule,
    NzInputModule,
    NzFormModule
  ]
})
export class AdminModule { }
