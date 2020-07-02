import { Age } from "./../src/businesslogic.js";

describe("Age", () => {
  let reuseableAgeYoung = new Age(25, 10000);
  let reuseableAgeOld = new Age(25000, 10000);

  beforeEach(() => {
    reuseableAgeYoung = new Age(25, 10000);
    reuseableAgeOld = new Age(25000, 10000);
  });

  test("Should determine age on Earth.", () => {
    expect(reuseableAgeYoung.age).toEqual(25);
    expect(reuseableAgeYoung.expectancy).toEqual(10000);
    expect(reuseableAgeOld.age).toEqual(25000);
    expect(reuseableAgeOld.expectancy).toEqual(10000);
  });

  test("Should determine age, expectancy, and difference between them on Mars", () => {
    reuseableAgeYoung.earthToMars();
    expect(reuseableAgeYoung.age).toEqual(13);
    expect(reuseableAgeYoung.expectancy).toEqual(5319);
    expect(reuseableAgeYoung.difference).toEqual(5306);
    
    reuseableAgeOld.earthToMars();
    expect(reuseableAgeOld.age).toEqual(13298);
    expect(reuseableAgeOld.expectancy).toEqual(5319);
    expect(reuseableAgeOld.difference).toEqual(
      "You have exceeded your lifespan by 7979 years!"
    );
  });

  test("Should determine age, expectancy, and difference between them on Venus", () => {
    reuseableAgeYoung.earthToVenus();
    expect(reuseableAgeYoung.age).toEqual(40);
    expect(reuseableAgeYoung.expectancy).toEqual(16129);
    expect(reuseableAgeYoung.difference).toEqual(16089);
    
    reuseableAgeOld.earthToVenus();
    expect(reuseableAgeOld.age).toEqual(40323);
    expect(reuseableAgeOld.expectancy).toEqual(16129);
    expect(reuseableAgeOld.difference).toEqual(
      "You have exceeded your lifespan by 24194 years!"
    );
  });

  test("Should determine age, expectancy, and difference between them on Jupiter", () => {
    reuseableAgeYoung.earthToJupiter();
    expect(reuseableAgeYoung.age).toEqual(2);
    expect(reuseableAgeYoung.expectancy).toEqual(843);
    expect(reuseableAgeYoung.difference).toEqual(841);
    
    reuseableAgeOld.earthToJupiter();
    expect(reuseableAgeOld.age).toEqual(2108);
    expect(reuseableAgeOld.expectancy).toEqual(843);
    expect(reuseableAgeOld.difference).toEqual(
      "You have exceeded your lifespan by 1265 years!"
    );
  });

  test("Should determine age, expectancy, and difference between them on Mercury", () => {
    reuseableAgeYoung.earthToMercury();
    expect(reuseableAgeYoung.age).toEqual(104);
    expect(reuseableAgeYoung.expectancy).toEqual(41667);
    expect(reuseableAgeYoung.difference).toEqual(41563);
    
    reuseableAgeOld.earthToMercury();
    expect(reuseableAgeOld.age).toEqual(104167);
    expect(reuseableAgeOld.expectancy).toEqual(41667);
    expect(reuseableAgeOld.difference).toEqual("You have exceeded your lifespan by 62500 years!");
  });
});
