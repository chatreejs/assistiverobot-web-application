import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobComponent } from './job/job.component';
import { LocationComponent } from './location/location.component';
import { UmComponent } from './um/um.component';


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
        path: 'location',
        component: LocationComponent
      },
      {
        path: 'job',
        component: JobComponent
      },
      {
        path: 'um',
        component: UmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
