export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  earthToMars() {
    let marsAge = this.age * 0.24;
    return marsAge;
  }
  earthToVenus() {}
  earthToJupiter() {}
  earthToMercury() {}
}
