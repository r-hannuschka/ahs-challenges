import { Component } from '@angular/core';
import { CheckoutService } from '../services/checkout';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface AddressFormGroup {
  city: FormControl<string | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  postalCode: FormControl<string | null>;
  street: FormControl<string | null>;
}

@Component({
  selector: 'app-checkout-address-form',
  templateUrl: 'address.html'
})
export class CheckoutAddressComponent {

  public addressForm: FormGroup<AddressFormGroup>;

  constructor(
    private readonly checkoutService: CheckoutService,
    private readonly formBuilder: FormBuilder
  ) {
    this.addressForm = this.buildAddressForm();
    this.checkoutService.registerFormGroup('address', this.addressForm);
  }

  private buildAddressForm(): FormGroup<AddressFormGroup> {
    return this.formBuilder.group<AddressFormGroup>({
      lastName: this.formBuilder.control(null, Validators.required),
      firstName: this.formBuilder.control(null, Validators.required),
      city: this.formBuilder.control(null, Validators.required),
      postalCode: this.formBuilder.control(null, [Validators.required, Validators.pattern(/^\d{5}$/)]),
      street: this.formBuilder.control(null, Validators.required)
    });
  }
}
