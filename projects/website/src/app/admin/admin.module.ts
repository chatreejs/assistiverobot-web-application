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
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AdminComponent,
    LocationComponent,
    JobComponent,
    UmComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzInputModule,
    NzPaginationModule,
    NzModalModule,
    NzFormModule,
    DragDropModule,

  ]
})
export class AdminModule { }
