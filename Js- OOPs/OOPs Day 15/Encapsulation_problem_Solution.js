class Car {
    #speed = 0; // Private field
    setSpeed(newSpeed) { // Public method
      if (newSpeed >= 0) {
        this.#speed = newSpeed;
      }
    }
    getSpeed() { // Public method
      return this.#speed;
    }
  }
  
  let myCar = new Car();
  myCar.setSpeed(100); // Works
  console.log(myCar.getSpeed()); // Output: 100
  console.log(myCar.#speed); // Error: Private field '#speed' is not accessible