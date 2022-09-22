import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { TabsModule } from './tabs/tabs.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToolbarModule, TabsModule],
  exports: [ToolbarModule, TabsModule],
})
export class CoreModule {}
