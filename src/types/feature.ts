import { BaseElement, Test, Testable } from './base';
import { Subfeature } from './subfeature';

export class Feature extends Testable implements BaseElement {
  constructor(
    public id: string,
    public name: string,
    public description: string
  ) {
    super();
  }
  tests: Test[] = [];

  subfeatures: Subfeature[] = [];

  addSubfeature(subfeature: Subfeature) {
    if (this.subfeatures.find((s) => s.id === subfeature.id))
      throw new Error('Subfeature id already exists in the feature.');
    this.subfeatures.push(subfeature);
  }
}
