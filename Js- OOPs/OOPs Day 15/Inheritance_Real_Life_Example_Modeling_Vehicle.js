// Parent class
class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
    drive() {
      console.log(`${this.brand} vehicle is driving.`);
    }
  }
  
  // Child class
  class Car extends Vehicle {
    constructor(brand, model) {
      super(brand); // Inherit brand from Vehicle
      this.model = model;
    }
    drive() { // Override parent’s method
      console.log(`${this.brand} ${this.model} is zooming on the road!`);
    }
  }
  
  let vehicle = new Vehicle("Toyota");
  let car = new Car("Toyota", "Corolla");
  
  vehicle.drive(); // Output: Toyota vehicle is driving.
  car.drive(); // Output: Toyota Corolla is zooming on the road!