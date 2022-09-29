import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MainPAgeTabModule } from './components/main-page-tab/main-page-tab.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule, MatTabsModule, MainPAgeTabModule],
  exports: [TabsComponent],
})
export class TabsModule {}
