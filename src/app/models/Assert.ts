export class Assert {
  inputFn
  eV
  constructor(inputFn: any, expectedValue: any) {
    this.inputFn = inputFn;
    this.eV = expectedValue
  }

  public assert(inputFn, eV): boolean {
    return inputFn === eV
      ? true
      : false
  }
}
