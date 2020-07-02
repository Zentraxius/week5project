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
    if ((this.expectancy - this.age) < 1) {
      this.difference = "You have exceeded your lifespan by " + Math.abs(this.expectancy - this.age) + " years!"
    } else {
      this.difference = this.expectancy - this.age;
    }
  }

  earthToVenus() {
    this.age = (Math.round(this.age / 0.62));
    this.expectancy = (Math.round(this.expectancy / 0.62));
    this.difference = this.expectancy - this.age;
  }

  earthToJupiter() {
    this.age = (Math.round(this.age / 11.86));
    this.expectancy = (Math.round(this.expectancy / 11.86));
    this.difference = this.expectancy - this.age;
  }

  earthToMercury() {
    this.age = (Math.round(this.age / 0.24));
    this.expectancy = (Math.round(this.expectancy / 0.24));
    this.difference = this.expectancy - this.age;
  }
}
