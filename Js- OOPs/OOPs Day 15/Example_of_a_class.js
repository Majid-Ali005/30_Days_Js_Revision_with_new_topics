class Car {
    constructor(color, speed) { // Constructor to initialize properties
      this.color = color;
      this.speed = speed;
    }
    drive() { // Method
      console.log(`The ${this.color} car is driving at ${this.speed} km/h`);
    }
  }
  
  // Creating objects from the class
  let car1 = new Car("red", 120);
  let car2 = new Car("blue", 150);
  
  car1.drive(); // Output: The red car is driving at 120 km/h
  car2.drive(); // Output: The blue car is driving at 150 km/h