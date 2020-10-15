import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MapFormComponent } from './map-form/map-form.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { CompleteComponent } from './complete/complete.component';
import { AuthenticationGuard } from '../authentication/authentication.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
