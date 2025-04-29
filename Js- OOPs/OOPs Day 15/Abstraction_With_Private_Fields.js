class Car {
    #engineStatus = "off"; // Private field (hidden detail)
    
    start() { // Public method (exposed interface)
      this.#engineStatus = "on";
      this.#initializeEngine(); // Internal method (hidden)
      console.log("Car is starting...");
    }
    
    stop() { // Public method (exposed interface)
      this.#engineStatus = "off";
      console.log("Car is stopped.");
    }
    
    #initializeEngine() { // Private method (hidden detail)
      console.log("Engine initialized (complex process hidden).");
    }
  }
  
  const myCar = new Car();
  myCar.start(); // Output: Engine initialized (complex process hidden).
                 //         Car is starting...
  myCar.stop();  // Output: Car is stopped.
  // myCar.#engineStatus; // Error: Private field '#engineStatus' is not accessible
  // myCar.#initializeEngine(); // Error: Private method is not accessible