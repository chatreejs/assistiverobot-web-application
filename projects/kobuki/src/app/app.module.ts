import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {DisplayEyeComponent} from './component/display-eye/display-eye.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {HttpClientModule} from '@angular/common/http';
import {CarryItemComponent} from './component/carry-item/carry-item.component';
import {SenderComponent} from './component/sender/sender.component';
import {RecipeComponent} from './component/recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayEyeComponent,
    CarryItemComponent,
    SenderComponent,
    RecipeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    NzGridModule,
    NzLayoutModule,
    NzModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}