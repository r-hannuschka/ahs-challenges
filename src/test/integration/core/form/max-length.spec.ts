import { DirectivePageObject } from "@test/support/page-object/directive"

describe('Max Length Directive', () => {
  let pageObject: DirectivePageObject;

  beforeEach(() => {
    pageObject = new DirectivePageObject()
  })

  it('should have chars left 5', () => {
    const charsLeft = pageObject.notizCharsLeftEl.nativeElement.textContent
    expect(charsLeft.trim()).toBe("5")
  })

  it('should set chars left to 4', () => {
    pageObject.notizFormCtrlKeyDown('a')
    const charsLeft = pageObject.notizCharsLeftEl.nativeElement.textContent
    expect(charsLeft.trim()).toBe("4")
  })

  it('should cancel the keypress event if we already entered 5 chars', () => {
    pageObject.setNotizValue('12345')

    let charsLeft = pageObject.notizCharsLeftEl.nativeElement.textContent
    expect(charsLeft.trim()).toBe("0")

    const eventResult = pageObject.notizFormCtrlKeyDown('6')
    expect(eventResult.defaultPrevented).toBeTruthy()
    expect(charsLeft.trim()).toBe("0")
  })

  it('should not block backspace key', () => {
    pageObject.setNotizValue('12345')
    const eventResult = pageObject.notizFormCtrlKeyDown('Backspace')
    expect(eventResult.defaultPrevented).toBeFalsy()
  })

  // should handle enter and not cancel event
  it('should not block enter key', () => {
    pageObject.setNotizValue('12345')
    const eventResult = pageObject.notizFormCtrlKeyDown('Enter')
    expect(eventResult.defaultPrevented).toBeFalsy()
  })

  it('should not block ctrl key', () => {
    pageObject.setNotizValue('12345')
    const eventResult = pageObject.notizFormCtrlKeyDown('a', true)
    expect(eventResult.defaultPrevented).toBeFalsy()
  })

  it('should invalidate and show validation error', () => {
    pageObject.setNotizValue('123456')
    const errorEl = pageObject.notizErrorEl.nativeElement.textContent
    expect(errorEl.trim()).toBe('field is invalid')
  })
})
