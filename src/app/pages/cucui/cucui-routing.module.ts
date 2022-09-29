import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CucuiComponent } from './cucui.component';

const routes: Routes = [
  {
    path: '',
    component: CucuiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CucuiRoutingModule {}
