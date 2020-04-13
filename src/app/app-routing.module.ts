import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MapFormComponent} from './component/map-form/map-form.component';
import {ConfirmComponent} from './component/confirm/confirm.component';
import {CompleteComponent} from './component/complete/complete.component';
import {PageNotFoundComponent} from './component/pagenotfound/pagenotfound.component';

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
