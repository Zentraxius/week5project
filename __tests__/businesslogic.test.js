// Use import to bring stuff over and test
import { Age } from './../src/businesslogic.js';
import {TestScheduler} from 'jest';

describe('Age', () => {
let reuseableAge = new Age(25, 79)
test('should determine age on earth', () => {
  expect(reuseableAge.age).toEqual(1);
  expect(reuseableAge.expectancy).toEqual(2);
})
})