// Parent class
class Vehicle {
    constructor(brand) {
      this.brand = brand;
    }
    move() { // Method to be overridden
      console.log(`${this.brand} vehicle is moving.`);
    }
  }
  
  // Child class 1
  class Car extends Vehicle {
    move() { // Override parent’s method
      console.log(`${this.brand} car is driving on the road.`);
    }
  }
  
  // Child class 2
  class Bicycle extends Vehicle {
    move() { // Override parent’s method
      console.log(`${this.brand} bicycle is pedaling on the path.`);
    }
  }
  
  // Using polymorphism
  const vehicles = [
    new Vehicle("Generic"),
    new Car("Toyota"),
    new Bicycle("Trek")
  ];
  
  vehicles.forEach(vehicle => {
    vehicle.move();
  });