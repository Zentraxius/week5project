// Use import to bring stuff over and test
import { Age } from './../src/businesslogic.js';


describe('Age', () => {
let reuseableAge = new Age(25, 79)
test('should determine age on earth', () => {
  expect(reuseableAge.age).toEqual(25);
  expect(reuseableAge.expectancy).toEqual(79);
})
})