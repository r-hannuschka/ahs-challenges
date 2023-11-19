import { Injectable } from '@angular/core';
import { FormBuilder, ValidationErrors } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class CheckoutService {

  constructor(private readonly formBuilder: FormBuilder) {
    console.log(formBuilder)
  }

  validate(): ValidationErrors | null {
    return null;
  }
}
