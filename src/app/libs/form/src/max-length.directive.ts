import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaxLength]',
  standalone: true,
  exportAs: 'MaxLength'
})
export class MaxLengthDirective {

  @Input()
  set appMaxLength(length: number) {
    // not empty
  }


  ngOnInit(): void {
    // not empty
  }

  /**
   * listen to keydown event
   */
  @HostListener('keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent): void {
  }
}