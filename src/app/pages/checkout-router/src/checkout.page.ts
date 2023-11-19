import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './components/checkout';
import { CheckoutAddressComponent } from './components/address';
import { CheckoutGiftComponent } from './components/gift';
import { CheckoutRoutingModule } from './checkout-routing.module';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, CheckoutRoutingModule
  ],
  exports: [],
  declarations: [
    CheckoutComponent,
    CheckoutAddressComponent,
    CheckoutGiftComponent
  ],
  providers: [],
})
export class CheckoutPageModule { }
