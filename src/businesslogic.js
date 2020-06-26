export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  earthToMars() {
    let marsResult = []
    marsResult.push(Math.round(this.age * 1.88))
    marsResult.push(Math.round(this.expectancy * 1.88))
    return marsResult
  }

  earthToVenus() {
  let venusAge = Math.round(this.age * 0.62)
  return venusAge
  }

  earthToJupiter() {
    let jupiterAge = Math.round(this.age * 11.86)
    return jupiterAge
  }

  earthToMercury() {
    let mercuryAge = Math.round(this.age * 0.24)
    return mercuryAge;
  }
}
