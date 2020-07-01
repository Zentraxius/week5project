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

  test("Should determine age, expectancy, and difference between them on Mars", () => {
    reuseableAge.earthToMars();
    expect(reuseableAge.age).toEqual(13);
    expect(reuseableAge.expectancy).toEqual(5319);
    expect(reuseableAge.difference).toEqual(5306);
  });

  test("Should determine age, expectancy, and difference between them on Venus", () => {
    reuseableAge.earthToVenus();
    expect(reuseableAge.age).toEqual(40);
    expect(reuseableAge.expectancy).toEqual(16129);
    expect(reuseableAge.difference).toEqual(16089);
  });

  test("Should determine age, expectancy, and difference between them on Jupiter", () => {
    reuseableAge.earthToJupiter();
    expect(reuseableAge.age).toEqual(40);
    expect(reuseableAge.expectancy).toEqual(16129);
    expect(reuseableAge.difference).toEqual(16089);
  });

  // test("Should determine age, expectancy, and difference between them on Mercury", () => {
  //   expect(reuseableAge.earthToMercury()).toEqual([6, 2400, 2394]);

  //   expect("You are " + reuseableAge.earthToMercury()[0] + " years old on Mercury!").toEqual("You are " + 6 + " years old on Mercury!");

  //   expect(reuseableAge.earthToMercury()[1]).toEqual(reuseableAge.earthToMercury()[1])

  // if (reuseableAge.earthToMercury()[2] < 0) {
  //   expect(reuseableAge.earthToMercury()[2]).toEqual(reuseableAge.earthToMercury()[2])
  // } else {

  //   expect("You have " + reuseableAge.earthToMercury()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToMercury()[2]) + " more years of life expectancy to enjoy!")
  // }

  // });
});
