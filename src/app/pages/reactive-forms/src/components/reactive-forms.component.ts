import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: 'reactive-forms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormsComponent {

  public mainForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.mainForm = this.createMainForm();
  }

  private createRechnungsAdresseForm(): FormGroup {
    return this.formBuilder.group({
      'street': this.formBuilder.control(null, { validators: Validators.required }),
      'hausnummer': this.formBuilder.control(null),
      'plz': this.formBuilder.control(null),
      'ort': this.formBuilder.control(null),
    })
  }

  private createLieferAdressForm(): FormGroup {
    return this.formBuilder.group({
      'street': this.formBuilder.control(null, { validators: Validators.required }),
      'hausnummer': this.formBuilder.control(null),
      'plz': this.formBuilder.control(null),
      'ort': this.formBuilder.control(null),
    })
  }

  public createMainForm(): FormGroup {
    return this.formBuilder.group({
      person: this.createPersonenForm(),
      rechnungsAdresse: this.createRechnungsAdresseForm(),
      lieferAdresse: this.createLieferAdressForm(),
      myFormGroup: this.createNewFormGroup()
    })
  }

  private createNewFormGroup(): FormGroup {
    return this.formBuilder.group({});
  }

  private createPersonenForm(): FormGroup {
    return this.formBuilder.group({
      'name': this.formBuilder.control(null),
      'nachname': this.formBuilder.control(null),
      'email': this.formBuilder.control(null, { validators: [Validators.email, Validators.required] }),
    })
  }

  public senden(): void {

    if(this.mainForm.valid) {
      console.log('Formular ist valide und wird abgesendet')
      return;
    }

    console.log('das Formular hat Fehler')
  }
}
