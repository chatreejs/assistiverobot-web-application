import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './component/selection/selection.component';
import { DisplayEyeComponent } from './component/display-eye/display-eye.component';
import { CarryItemComponent } from "./component/carry-item/carry-item.component";


const routes: Routes = [
    { path: '', component: DisplayEyeComponent },
    { path: 'select', component: SelectionComponent },
    { path: 'carry', component: CarryItemComponent },
    { path: '**', component: DisplayEyeComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
