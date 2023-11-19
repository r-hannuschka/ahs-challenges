import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: 'checkout.html',
  providers: [CheckoutService]
})
export class CheckoutComponent implements OnInit {

  constructor(
    private readonly checkoutService: CheckoutService
  ) { }

  submit(): void {
    if (this.checkoutService.isValid()) {
      console.log(this.checkoutService.getRawValue())
    }
  }

  ngOnInit() { }
}
