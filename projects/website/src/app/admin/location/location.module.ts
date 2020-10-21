import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationFormComponent } from './location-form/location-form.component';

import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    LocationComponent,
    LocationTableComponent,
    LocationFormComponent,
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    ReactiveFormsModule,

    NzPageHeaderModule,
    NzButtonModule,
    NzTableModule,
    NzIconModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
  ]
})
export class LocationModule { }
