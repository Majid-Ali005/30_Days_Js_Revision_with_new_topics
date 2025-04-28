class Car {
    constructor() {
      this._speed = 0; // _speed is "private" by convention
    }
    setSpeed(newSpeed) { // Public method to control access
      if (newSpeed >= 0) {
        this._speed = newSpeed;
      }
    }
    getSpeed() { // Public method to access data
      return this._speed;
    }
  }
  
  let myCar = new Car();
  myCar.setSpeed(100); // Use method to change speed
  console.log(myCar.getSpeed()); // Output: 100
  myCar._speed = -50; // Not recommended, but possible (not truly private)
  console.log(myCar.getSpeed()); // Output: -50