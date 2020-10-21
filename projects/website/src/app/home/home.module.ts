import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
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
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
  declarations: [
    HomeComponent,
    MapFormComponent,
    ConfirmComponent,
    CompleteComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CoreModule,

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
    NzFormModule,
    NzTableModule,
    NzMenuModule,
    NzPaginationModule,
    NzModalModule,
    DragDropModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzRadioModule,
    NzToolTipModule,
  ]
})
export class HomeModule { }
