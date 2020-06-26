// Use import to bring stuff over and test
import { Age } from "./../src/businesslogic.js";

describe("Age", () => {
  let reuseableAge = new Age(25000, 10000);

  beforeEach(() => {
    reuseableAge = new Age(25000, 10000);
  });

  test("Should determine age on Earth.", () => {
    expect(reuseableAge.age).toEqual(25000);
    expect(reuseableAge.expectancy).toEqual(10000);
  });
//
  test("Should determine age on Mars, their expected lifespan, and their remaining lifespan. If lifespan is exceeded, indicate as such", () => {
    expect(reuseableAge.earthToMars()).toEqual([47000, 18800, -28200]); // Array with all values
    expect("You are " + reuseableAge.earthToMars()[0] + " years old on Mars!").toEqual("You are " + 47000 + " years old on Mars!");  // This is your age on Mars
    expect("You are expected to live for a total of " + reuseableAge.earthToMars()[1] + " years!").toEqual("You are expected to live for a total of " + 18800 + " years!")
  if (reuseableAge.earthToMars()[2] < 0) {
    expect("You have exceeded your life expectancy by " + Math.abs(reuseableAge.earthToMars()[2]) + " years!").toEqual("You have exceeded your life expectancy by " + Math.abs(reuseableAge.earthToMars()[2]) + " years!")
  } else {
    expect("You have " + reuseableAge.earthToMars()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + reuseableAge.earthToMars()[2] + " more years of life expectancy to enjoy!")
  }
  });
//
  test("Should determine age on Venus, their expected lifespan, and their remaining lifespan. If lifespan is exceeded, indicate as such", () => {
    expect(reuseableAge.earthToVenus()).toEqual([15500, 6200, -9300]);

    expect("You are " + reuseableAge.earthToVenus()[0] + " years old on Venus!").toEqual("You are " + 15500 + " years old on Venus!");  

    expect("You are expected to live for a total of " + reuseableAge.earthToVenus()[1] + " years!").toEqual("You are expected to live for a total of " + reuseableAge.earthToVenus()[1] + " years!")

  if (reuseableAge.earthToVenus()[2] < 0) {
    expect("You have exceeded your life expectancy by " + reuseableAge.earthToVenus()[2] + " years!").toEqual("You have exceeded your life expectancy by " + reuseableAge.earthToVenus()[2] + " years!")
  } else {

    expect("You have " + reuseableAge.earthToVenus()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToVenus()[2]) + " more years of life expectancy to enjoy!")
  }

  });

  test("Should determine age on Jupiter, their expected lifespan, and their remaining lifespan. If lifespan is exceeded, indicate as such", () => {
    expect(reuseableAge.earthToJupiter()).toEqual([296500, 118600, -177900]);

    expect("You are " + reuseableAge.earthToJupiter()[0] + " years old on Jupiter!").toEqual("You are " + 296500 + " years old on Jupiter!");  

    expect("You are expected to live for a total of " + reuseableAge.earthToJupiter()[1] + " years!").toEqual("You are expected to live for a total of " + reuseableAge.earthToJupiter()[1] + " years!")

  if (reuseableAge.earthToJupiter()[2] < 0) {
    expect("You have exceeded your life expectancy by " + reuseableAge.earthToJupiter()[2] + " years!").toEqual("You have exceeded your life expectancy by " + reuseableAge.earthToJupiter()[2] + " years!")
  } else {

    expect("You have " + reuseableAge.earthToJupiter()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToJupiter()[2]) + " more years of life expectancy to enjoy!")
  }



  });

  test("Should determine age on Mercury, their expected lifespan, and their remaining lifespan. If lifespan is exceeded, indicate as such", () => {
    expect(reuseableAge.earthToMercury()).toEqual([6000, 2400, -3600]);

    expect("You are " + reuseableAge.earthToMercury()[0] + " years old on Mercury!").toEqual("You are " + 6000 + " years old on Mercury!");  

    expect("You are expected to live for a total of " + reuseableAge.earthToMercury()[1] + " years!").toEqual("You are expected to live for a total of " + reuseableAge.earthToMercury()[1] + " years!")

  if (reuseableAge.earthToMercury()[2] < 0) {
    expect("You have exceeded your life expectancy by " + reuseableAge.earthToMercury()[2] + " years!").toEqual("You have exceeded your life expectancy by " + reuseableAge.earthToMercury()[2] + " years!")
  } else {

    expect("You have " + reuseableAge.earthToMercury()[2] + " more years of life expectancy to enjoy!").toEqual("You have " + Math.abs(reuseableAge.earthToMercury()[2]) + " more years of life expectancy to enjoy!")
  }


  });
});
