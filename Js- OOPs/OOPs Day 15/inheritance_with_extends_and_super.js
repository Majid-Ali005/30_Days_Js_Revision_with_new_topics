class Shape {
    constructor(name) {
    this.name = name;
    }
   move() {
    console.log(`${this.name} moved`);
    }
   }
   class Circle extends Shape {
    constructor(radius) {
    super('Circle');
    this.radius = radius;
    }
   }
   let myCircle = new Circle(5);
   myCircle.move(); // Circle moved