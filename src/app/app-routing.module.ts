import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('@app/page/dashboard').then((module) => module.DashboardModule),
}, {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
