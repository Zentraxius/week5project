export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
    this.difference = expectancy - age;
  }
// Each function should modify age based on that planets value in years
  earthToMars() {
    this.age = (Math.round(this.age / 1.88));
    this.expectancy = (Math.round(this.expectancy / 1.88));
    this.difference = this.expectancy - this.age;
  }

  earthToVenus() {
    this.age = (Math.round(this.age / 0.62));
    this.expectancy = (Math.round(this.expectancy / 0.62));
    this.difference = this.expectancy - this.age;
  }

  earthToJupiter() {
    let jupiterResult = [];
    jupiterResult.push(Math.round(this.age / 11.86));
    jupiterResult.push(Math.round(this.expectancy / 11.86));
    jupiterResult.push(jupiterResult[1] - jupiterResult[0]);
    return jupiterResult;
  }

  earthToMercury() {
    let mercuryResult = [];
    mercuryResult.push(Math.round(this.age / 0.24));
    mercuryResult.push(Math.round(this.expectancy / 0.24));
    mercuryResult.push(mercuryResult[1] - mercuryResult[0]);
    return mercuryResult;
  }
}
