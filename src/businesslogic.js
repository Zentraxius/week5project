export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  earthToMars() {
    let marsResult = [];
    marsResult.push(Math.round(this.age * 1.88));
    marsResult.push(Math.round(this.expectancy * 1.88));
    return marsResult;
  }

  earthToVenus() {
    let venusResult = [];
    venusResult.push(Math.round(this.age * 0.62));
    venusResult.push(Math.round(this.expectancy * 0.62));
    return venusResult;
  }

  earthToJupiter() {
    let jupiterResult = []
    jupiterResult.push(Math.round(this.age * 11.86))
    jupiterResult.push(Math.round(this.expectancy * 11.86))
    return jupiterResult;
  }

  earthToMercury() {
    let mercuryResult = []
    mercuryResult.push(Math.round(this.age * 0.24))
    mercuryResult.push(Math.round(this.expectancy * 0.24))
    return mercuryResult;
  }
}
