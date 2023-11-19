import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('@app/page/dashboard').then((module) => module.DashboardModule),
}, {
  path: 'directive',
  loadComponent: () => import('@app/page/directive').then((module) => module.DirectivePageComponent)
}, {
  path: 'checkout',
  loadChildren: () => import('@app/page/checkout').then((module) => module.CheckoutPageModule)
}, {
  path: 'reactiveforms',
  loadChildren: () => import('@app/page/reactive-forms').then((module) => module.ReactiveFormsPageModule)
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
