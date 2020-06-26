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

  test("Should determine age on Mars, their expected lifespan, and their remaining lifespan. If remaining lifespan is negative, that is how much they have exceeded their lifespan expectancy", () => {
    expect(reuseableAge.earthToMars()).toEqual([47, 18800, 18753]); // Array with all values
    expect("You are " + reuseableAge.earthToMars()[0] + " years old on Mars!").toEqual("You are " + 47 + " years old on Mars!");  // This is your age on Mars
  });

  test("Should determine age on Venus, their expected lifespan, and their remaining lifespan. If remaining lifespan is negative, that is how much they have exceeded their lifespan expectancy", () => {
    expect(reuseableAge.earthToVenus()).toEqual([16, 6200]);
  });

  test("Should determine age on Jupiter, their expected lifespan, and their remaining lifespan. If remaining lifespan is negative, that is how much they have exceeded their lifespan expectancy", () => {
    expect(reuseableAge.earthToJupiter()).toEqual([297, 118600]);
  });

  test("Should determine age on Mercury, their expected lifespan, and their remaining lifespan. If remaining lifespan is negative, that is how much they have exceeded their lifespan expectancy", () => {
    expect(reuseableAge.earthToMercury()).toEqual([6, 2400]);
  });
});
