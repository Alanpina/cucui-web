import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MainPageTabComponent } from './main-page-tab.component';

@NgModule({
  declarations: [MainPageTabComponent],
  imports: [CommonModule, MatTabsModule],
  exports: [MainPageTabComponent],
})
export class MainPAgeTabModule {}
