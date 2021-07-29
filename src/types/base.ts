export interface Test {
  id: string;
  title: string;
  done: boolean;
}

export interface BaseElement {
  id: string;
  name: string;
  description: string;
  tests: Test[];
}

export abstract class Testable {
  abstract tests: Test[];
  addTest(test: Test) {
    const testIndex = this.tests.findIndex((t) => t.id === test.id);
    if (testIndex > -1)
      throw new Error('Test id duplicated in the same object');
    this.tests.push(test);
  }
}
