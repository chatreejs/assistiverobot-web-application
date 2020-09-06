import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapFormComponent } from './component/map-form/map-form.component';
import { ConfirmComponent } from './component/confirm/confirm.component';
import { CompleteComponent } from './component/complete/complete.component';
import { PageNotFoundComponent } from './component/pagenotfound/pagenotfound.component';

// const routes: Routes = [
//   { path: '', component: MapFormComponent },
//   { path: 'confirm', component: ConfirmComponent },
//   { path: 'complete', component: CompleteComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'kobuki',
    loadChildren: () => import('./kobuki/kobuki.module').then(m => m.KobukiModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
