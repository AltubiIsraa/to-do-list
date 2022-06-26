export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * (this.radius ** 2);
  }
}
