import { BaseElement, Test, Testable } from './base';
import { Feature } from './feature';

export class Collection extends Testable implements BaseElement {
  constructor(
    public id: string,
    public name: string,
    public description: string
  ) {
    super();
  }
  public tests: Test[] = [];

  public features: Feature[] = [];

  addFeature(feature: Feature) {
    if (this.features.find((f) => f.id === feature.id))
      throw new Error('Feature ID already exists in the collection.');
    this.features.push(feature);
  }
}
