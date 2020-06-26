export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  earthToMars() {
    let marsAge = Math.round(this.age * 1.88);
    return marsAge;
  }
  earthToVenus() {}
  earthToJupiter() {}
  earthToMercury() {
    let mercuryAge = Math.round(this.age * 0.24)
    return mercuryAge;
  }
}
