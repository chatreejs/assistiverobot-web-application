import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'job',
        loadChildren: () => import('./job/job.module').then(m => m.JobModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./location/location.module').then(m => m.LocationModule)
      },
      {
        path: 'um',
        redirectTo: '/forbidden'
        // component: UmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
