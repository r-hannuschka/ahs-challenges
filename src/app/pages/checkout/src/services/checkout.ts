import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EMPTY, Observable, distinctUntilChanged, startWith } from 'rxjs';

@Injectable()
export class CheckoutService {

  private checkoutForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({});
  }

  registerFormGroup(key: string, formGroup: FormGroup): void  {
    this.checkoutForm.registerControl(key, formGroup);
    this.checkoutForm.updateValueAndValidity();
  }

  removeFormGroup(key: string): void {
    this.checkoutForm.removeControl(key);
    this.checkoutForm.updateValueAndValidity();
  }

  validationStateChange(group?: string): Observable<any> {
    const abstractControl = group ? this.checkoutForm.get(group) : this.checkoutForm;

    if (abstractControl) {
      return abstractControl.statusChanges.pipe(
        startWith(abstractControl.status),
        distinctUntilChanged()
      );
    }
    return EMPTY;
  }

  isValid(): boolean {
    return this.checkoutForm.valid;
  }

  getRawValue(): unknown {
    return this.checkoutForm.getRawValue();
  }
}
