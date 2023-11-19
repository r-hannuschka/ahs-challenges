
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout';
import { CheckoutAddressComponent } from './components/address';
import { CheckoutGiftComponent } from './components/gift';

@NgModule({
  imports: [
    RouterModule.forChild([
    {
      path: '',
      component: CheckoutComponent,
      children: [
        {
          path: 'address',
          component: CheckoutAddressComponent
        },
        {
          path: 'gift',
          component: CheckoutGiftComponent
        },
        {
          path: '',
          redirectTo: 'address',
          pathMatch: 'full'
        }
      ]
    },
  ])],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
