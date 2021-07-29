import { BaseElement, Test, Testable } from './base';

export enum ElementType {
  Variable,
  Method,
}

export class Element extends Testable implements BaseElement {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public type: ElementType
  ) {
    super();
  }
  tests: Test[] = [];
}
