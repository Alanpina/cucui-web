import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { TabsModule } from 'src/app/modules/tabs/tabs.module';
import { CucuiRoutingModule } from './cucui-routing.module';
import { CucuiComponent } from './cucui.component';


@NgModule({
  declarations: [
    CucuiComponent
  ],
  imports: [
    TabsModule,
    CucuiRoutingModule
  ]
})
export class CucuiModule { }
