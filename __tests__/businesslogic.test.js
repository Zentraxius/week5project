import { Age } from "./../src/businesslogic.js";

describe("Age", () => {
  let reuseableAgeYoung = new Age(25, 10000);

  beforeEach(() => {
    reuseableAgeYoung = new Age(25, 10000);
    reuseableAgeOld = new Age(25000, 10000);
  });

  test("Should determine age on Earth.", () => {
    expect(reuseableAgeYoung.age).toEqual(25);
    expect(reuseableAgeYoung.expectancy).toEqual(10000);
  });

  test("Should determine age, expectancy, and difference between them on Mars", () => {
    reuseableAgeYoung.earthToMars();
    expect(reuseableAgeYoung.age).toEqual(13);
    expect(reuseableAgeYoung.expectancy).toEqual(5319);
    expect(reuseableAgeYoung.difference).toEqual(5306);
    //
  });

  test("Should determine age, expectancy, and difference between them on Venus", () => {
    reuseableAgeYoung.earthToVenus();
    expect(reuseableAgeYoung.age).toEqual(40);
    expect(reuseableAgeYoung.expectancy).toEqual(16129);
    expect(reuseableAgeYoung.difference).toEqual(16089);
    //
  });

  test("Should determine age, expectancy, and difference between them on Jupiter", () => {
    reuseableAgeYoung.earthToJupiter();
    expect(reuseableAgeYoung.age).toEqual(2);
    expect(reuseableAgeYoung.expectancy).toEqual(843);
    expect(reuseableAgeYoung.difference).toEqual(841);
    //
  });

  test("Should determine age, expectancy, and difference between them on Mercury", () => {
    reuseableAgeYoung.earthToMercury;
    expect(reuseableAgeYoung.age).toEqual(2);
    expect(reuseableAgeYoung.expectancy).toEqual(843);
    expect(reuseableAgeYoung.difference).toEqual(841);
  });
});
