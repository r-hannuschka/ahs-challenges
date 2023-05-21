import { Directive, Input, HostListener } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, distinctUntilChanged, map, startWith } from 'rxjs';

@Directive({
  selector: '[appMaxLength]',
  standalone: true,
  exportAs: 'MaxLength'
})
export class MaxLengthDirective {

  charsLeft: Observable<number>;

  private charLeft$: BehaviorSubject<number>;

  constructor(
    private readonly ngControl: NgControl
  ) {
    this.charLeft$ = new BehaviorSubject(-1)
    this.charsLeft = this.charLeft$.asObservable()
  }

  @Input()
  appMaxLength = -1;

  ngOnInit(): void {
    this.ngControl.control?.addValidators(Validators.maxLength(this.appMaxLength))
    this.ngControl.control?.updateValueAndValidity()
    this.ngControl.control?.valueChanges
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        map((value) => this.appMaxLength - (value ?? '').length)
      )
      .subscribe(this.charLeft$)
  }

  /**
   * listen to keydown event
   */
  @HostListener('keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent): void {
    const value: string = this.ngControl.control?.value?.toString() ?? ''

    if (value.length < this.appMaxLength) {
      return
    }

    if (event.key === 'Enter' || event.key === 'Backspace') {
      return
    }

    if (event.ctrlKey) {
      return
    }

    event.stopPropagation()
    event.preventDefault()
  }
}
