import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MaxLengthDirective } from '@app/lib/form'
import { CommonModule } from '@angular/common';

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

  form: FormGroup<{
    notiz: FormControl<string | null>,
    kommentar: FormControl<string | null>
  }>

  constructor (
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      notiz: this.fb.control<string | null>(null),
      kommentar: this.fb.control<string | null>(null)
    })
  }
}
