class Vehicle {
    startEngine() {
    console.log('Engine started');
    }
   stopEngine() {
    console.log('Engine stopped');
    }
   }
   class Car extends Vehicle {
    startEngine() {
    console.log('Car engine started');
    }
   }
   let myCar = new Car();
   myCar.startEngine(); // Car engine started