import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobFormComponent } from './job-form/job-form.component';
import { JobTableComponent } from './job-table/job-table.component';
import { JobComponent } from './job.component';

const routes: Routes = [
  {
    path: '',
    component: JobComponent,
    children: [
      { path: '', component: JobTableComponent },
      { path: 'edit', component: JobFormComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
