import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-address-form',
  templateUrl: 'address.html'
})
export class CheckoutAddressComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit() {
    console.log('on init');
  }
}
