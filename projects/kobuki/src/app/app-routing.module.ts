import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DisplayEyeComponent} from './component/display-eye/display-eye.component';
import {CarryItemComponent} from './component/carry-item/carry-item.component';
import {RecipeComponent} from './component/recipe/recipe.component';
import {SenderComponent} from './component/sender/sender.component';


const routes: Routes = [
  {path: '', component: DisplayEyeComponent},
  {path: 'sender', component: SenderComponent},
  {path: 'carry', component: CarryItemComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: '**', component: DisplayEyeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
