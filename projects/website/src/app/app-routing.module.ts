import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { Result403ForbiddenComponent } from './result403forbidden/result403forbidden.component';
import { Result404NotfoundComponent } from './result404notfound/result404notfound.component';


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
    path: 'forbidden',
    component: Result403ForbiddenComponent
  },
  {
    path: 'notfound',
    component: Result404NotfoundComponent
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  // },
  {
    path: '**',
    redirectTo: 'notfound'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
