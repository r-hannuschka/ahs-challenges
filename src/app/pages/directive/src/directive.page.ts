import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaxLengthDirective } from '@app/core/form'
import { CommonModule } from '@angular/common';

//#region typings
export interface PageFormGroup {
  notiz: FormControl<string | null>,
  kommentar: FormControl<string | null>
}
//#endregion

@Component({
  selector: 'app-directive-execises',
  templateUrl: './directive.page.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaxLengthDirective
  ],
})
export class DirectivePageComponent {

  form: FormGroup<PageFormGroup>

  constructor (
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      notiz: this.fb.control<string | null>(null),
      kommentar: this.fb.control<string | null>(null)
    })
  }
}
