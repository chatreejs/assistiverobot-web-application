import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MapFormComponent } from './map-form/map-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CompleteComponent } from './complete/complete.component';
import { UmComponent } from './um/um.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MapFormComponent,
        data: { breadcrumb: 'เลือกสถานที่' }
      },
      {
        path: 'confirm',
        component: ConfirmComponent,
        data: { breadcrumb: 'เลือกสถานที่ > ยืนยันสถานที่' }
      },
      {
        path: 'complete',
        component: CompleteComponent,
        data: { breadcrumb: 'เลือกสถานที่ > ยืนยันสถานที่ > ผลการดำเนินการ' }
      },
      {
        path: 'um',
        component: UmComponent,
        data: { breadcrumb: 'เพิ่มสถานที่รับส่งของ' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
