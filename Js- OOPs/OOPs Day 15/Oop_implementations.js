class Car {
    constructor(color, speed) {
      this.color = color; // Property
      this.speed = speed;
    }
    drive() { // Method
      console.log(`The ${this.color} car is driving at ${this.speed} km/h`);
    }
  }
  let myCar = new Car("Red", 120); // Object creation
  myCar.drive(); // Output: The Red car is driving at 120 km/h