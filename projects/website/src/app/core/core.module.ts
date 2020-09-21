import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

import { NzBreadCrumbModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    NzBreadCrumbModule
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class CoreModule { }
