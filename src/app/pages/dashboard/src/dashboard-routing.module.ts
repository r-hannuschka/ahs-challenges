import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.page';

@NgModule({
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: DashboardComponent
    }
  ])]
})
export class DashboardRoutingModule {}