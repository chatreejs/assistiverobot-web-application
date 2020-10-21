import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationFormComponent } from './location-form/location-form.component';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    LocationComponent,
    LocationTableComponent,
    LocationFormComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,

    NzPageHeaderModule,
    NzButtonModule,
    NzTableModule,
    NzIconModule,
  ]
})
export class LocationModule { }
