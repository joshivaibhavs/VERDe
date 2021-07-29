import { BaseElement, Test, Testable } from './base';
import { Element } from './element';

export enum SubfeatureType {
  Class,
  Function,
}

export class Subfeature extends Testable implements BaseElement {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public type: SubfeatureType
  ) {
    super();
  }
  tests: Test[] = [];

  elements: Element[] = [];

  addElement(element: Element) {
    if (this.elements.find((e) => e.id === element.id))
      throw new Error('Element id already exists in the subfeature.');
    this.elements.push(element);
  }
}
