import { Age } from "./../src/businesslogic.js";

describe("Age", () => {
  let reuseableAge = new Age(25, 10000);

  beforeEach(() => {
    reuseableAge = new Age(25, 10000);
  });

  test('Should determine age on Earth.', () => {
    expect(reuseableAge.age).toEqual(25);
    expect(reuseableAge.expectancy).toEqual(10000);
  });

  test("Should determine age, expectancy, and difference between them on Mars", () => {
    expect((reuseableAge.earthToMars.age).toEqual(1))
    // expect(reuseableAge.earthToMars()).toEqual([13, 5319, 5306]); // Array with all values

    // expect(reuseableAge.earthToMars()[0]).toEqual(13);  // This is your age on Mars

    // expect(reuseableAge.earthToMars()[1]).toEqual(5319); // This is your expectancy on Mars

    // expect(reuseableAge.earthToMars()[2]).toEqual(5306); // This is the difference between your expected lifespan and your current age, on that planet.
  });

  // test("Should determine age, expectancy, and difference between them on Venus", () => {
  //   expect(reuseableAge.earthToVenus()).toEqual([16, 6200, 6184]);

  //   expect("You are " + reuseableAge.earthToVenus()[0] + " years old on Venus!").toEqual("You are " + 16 + " years old on Venus!");  

  //   expect(reuseableAge.earthToVenus()[1]).toEqual(reuseableAge.earthToVenus()[1])

  // if (reuseableAge.earthToVenus()[2] < 0) {
  //   expect(reuseableAge.earthToVenus()[2]).toEqual(reuseableAge.earthToVenus()[2])
  // } else {

  //   expect("You have " + reuseableAge.earthToVenus()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToVenus()[2]) + " more years of life expectancy to enjoy!")
  // }

  // });

  // test("Should determine age, expectancy, and difference between them on Jupiter", () => {
  //   expect(reuseableAge.earthToJupiter()).toEqual([297, 118600, 118303]);

  //   expect("You are " + reuseableAge.earthToJupiter()[0] + " years old on Jupiter!").toEqual("You are " + 297 + " years old on Jupiter!");  

  //   expect(reuseableAge.earthToJupiter()[1]).toEqual(reuseableAge.earthToJupiter()[1])

  // if (reuseableAge.earthToJupiter()[2] < 0) {
  //   expect(reuseableAge.earthToJupiter()[2]).toEqual(reuseableAge.earthToJupiter()[2])
  // } else {

  //   expect("You have " + reuseableAge.earthToJupiter()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToJupiter()[2]) + " more years of life expectancy to enjoy!")
  // }


  // });

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
