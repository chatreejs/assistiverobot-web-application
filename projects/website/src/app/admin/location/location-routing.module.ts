import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location.component';
import { LocationTableComponent } from './location-table/location-table.component';
import { LocationFormComponent } from './location-form/location-form.component';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent,
    children: [
      { path: '', component: LocationTableComponent },
      { path: 'create', component: LocationFormComponent },
      { path: 'edit/:id', component: LocationFormComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
