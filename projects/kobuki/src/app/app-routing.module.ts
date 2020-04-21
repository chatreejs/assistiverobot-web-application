import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SelectionComponent} from './component/selection/selection.component';
import {DisplayEyeComponent} from './component/display-eye/display-eye.component';


const routes: Routes = [
  {path: '', component: DisplayEyeComponent},
  {path: 'select', component: SelectionComponent},
  {path: '', component: DisplayEyeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
