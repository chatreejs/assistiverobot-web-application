import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KobukiRoutingModule } from './kobuki-routing.module';
import { KobukiComponent } from './kobuki.component';


@NgModule({
  declarations: [KobukiComponent],
  imports: [
    CommonModule,
    KobukiRoutingModule
  ]
})
export class KobukiModule { }
