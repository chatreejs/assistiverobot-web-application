import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapFormComponent} from './Component/map-form/map-form.component';
import {ConfirmComponent} from './Component/confirm/confirm.component';
import {CompleteComponent} from './Component/complete/complete.component';
import {PageNotFoundComponent} from './Component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: MapFormComponent},
  {path: 'confirm', component: ConfirmComponent},
  {path: 'complete', component: CompleteComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
