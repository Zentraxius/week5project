// Use import to bring stuff over and test
import { Age } from "./../src/businesslogic.js";

describe("Age", () => {
  let reuseableAge = new Age(25, 10000);

  beforeEach(() => {
    reuseableAge = new Age(25, 10000);
  });

  test("Should determine age on Earth.", () => {
    expect(reuseableAge.age).toEqual(25);
    expect(reuseableAge.expectancy).toEqual(10000);
  });

  test("Should determine age on Mars.", () => {
    expect(reuseableAge.earthToMars()).toEqual([47, 18800]);
  });

  test("Should determine age on Venus.", () => {
    expect(reuseableAge.earthToVenus()).toEqual(16);
  });

  test("Should determine age on Jupiter.", () => {
    expect(reuseableAge.earthToJupiter()).toEqual(297);
  });

  test("Should determine age on Mercury.", () => {
    expect(reuseableAge.earthToMercury()).toEqual(6);
  });
});
