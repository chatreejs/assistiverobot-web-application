import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KobukiComponent } from './kobuki.component';
import { CarryItemComponent } from './carry-item/carry-item.component';
import { DisplayEyeComponent } from './display-eye/display-eye.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';


const routes: Routes = [
  {
    path: '',
    component: KobukiComponent,
    children: [
      {
        path: '',
        component: DisplayEyeComponent
      },
      {
        path: 'sender',
        component: SenderComponent
      },
      {
        path: 'carry',
        component: CarryItemComponent
      },
      {
        path: 'receiver',
        component: ReceiverComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KobukiRoutingModule { }
