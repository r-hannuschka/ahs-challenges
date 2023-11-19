import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CheckoutService } from '../services/checkout';
import { distinctUntilChanged } from 'rxjs/operators';

interface GiftFormGroup {
  enabled: FormControl<boolean | null>;
  recipient: FormControl<string | null>;
  comment: FormControl<string | null>;
  from: FormControl<string | null>
}

@Component({
  selector: 'app-checkout-gift-form',
  templateUrl: 'gift.html'
})
export class CheckoutGiftComponent {
  public giftForm: FormGroup<GiftFormGroup>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly checkoutService: CheckoutService
  ) {
    this.giftForm = this.buildGiftForm()
    this.checkoutService.registerFormGroup('gift', this.giftForm)

    this.checkoutService.validationStateChange(`address`)
      .pipe(distinctUntilChanged())
      .subscribe((state) => {
        state === 'VALID' ? this.giftForm.enable() : this.giftForm.disable();
      })
  }

  private buildGiftForm(): FormGroup<GiftFormGroup> {
    return this.formBuilder.group<GiftFormGroup>({
      enabled: this.formBuilder.control(false),
      recipient: this.formBuilder.control(null),
      comment: this.formBuilder.control(null),
      from: this.formBuilder.control(null)
    });
  }
}
