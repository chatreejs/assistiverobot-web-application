import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KobukiRoutingModule } from './kobuki-routing.module';
import { KobukiComponent } from './kobuki.component';
import { DisplayEyeComponent } from './display-eye/display-eye.component';
import { CarryItemComponent } from './carry-item/carry-item.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  declarations: [
    KobukiComponent,
    DisplayEyeComponent,
    CarryItemComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    CommonModule,
    KobukiRoutingModule,

    NzLayoutModule,
    NzGridModule,
    NzButtonModule,
    NzModalModule,
  ]
})
export class KobukiModule { }
