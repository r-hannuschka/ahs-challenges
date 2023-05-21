import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormGroup } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { DirectivePageComponent, PageFormGroup } from "@app/page/directive";

//#region typings
declare type KeyboardEventResult = Pick<KeyboardEvent, 'defaultPrevented'>
//#endregion

export class DirectivePageObject {

  private readonly fixture: ComponentFixture<DirectivePageComponent>;

  constructor() {
    TestBed.configureTestingModule({
      imports: [DirectivePageComponent]
    }).compileComponents()

    this.fixture = TestBed.createComponent(DirectivePageComponent)
    this.fixture.detectChanges()
  }

  get notizInputEl(): DebugElement {
    return this.fixture.debugElement.query(By.css(`[testId="form-ctrl-notiz-input"]`))
  }

  get notizCharsLeftEl(): DebugElement {
    return this.fixture.debugElement.query(By.css(`[testId="form-ctrl-notiz-chars-left"]`))
  }

  get notizErrorEl(): DebugElement {
    return this.fixture.debugElement.query(By.css(`[testId="form-ctrl-notiz-error"]`))
  }

  get form(): FormGroup<PageFormGroup> {
    return this.fixture.componentInstance.form
  }

  triggerChangeDetection(): void {
    this.fixture.detectChanges()
  }

  /** emit event notiz form control */
  notizFormCtrlKeyDown(key: string, ctrlKey = false): KeyboardEventResult {
    const field = this.notizInputEl;
    const keydownEvent = new KeyboardEvent('keydown', {
      key,
      ctrlKey,
      cancelable: true,
      bubbles: true
    })

    field.triggerEventHandler('keydown', keydownEvent)
    if (keydownEvent.defaultPrevented === false) {
      this.setNotizValue(key, true)
    }

    const {defaultPrevented } = keydownEvent;
    return { defaultPrevented }
  }

  /** set value notiz field */
  setNotizValue(value: string, append = false): void {
    const inputEl = this.notizInputEl
    let newValue = value

    if (append) {
      newValue = inputEl.nativeElement.value + value
    }

    this.form.patchValue({ notiz: newValue })
    this.triggerChangeDetection()
  }
}
