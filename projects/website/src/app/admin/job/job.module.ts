import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StatusColorPipe } from '../../core/pipes/status-color.pipe';
import { CoreModule } from '../../core/core.module';

import { JobComponent } from './job.component';
import { JobFormComponent } from './job-form/job-form.component';
import { JobRoutingModule } from './job-routing.module';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { JobTableComponent } from './job-table/job-table.component';


@NgModule({
  declarations: [
    JobComponent,
    JobTableComponent,
    JobFormComponent,
    StatusColorPipe,
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    FormsModule,
    CoreModule,

    NzPageHeaderModule,
    NzRadioModule,
    NzTableModule,
    NzTagModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
  ]
})
export class JobModule { }
