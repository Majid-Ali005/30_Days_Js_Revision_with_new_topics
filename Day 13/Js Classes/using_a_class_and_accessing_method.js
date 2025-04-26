class Car {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}`;
    }
  }
  
  // Creating instances
  const car1 = new Car("Toyota", "Corolla");
  const car2 = new Car("Honda", "Civic");
  
  console.log(car1.getDetails()); // Output: Toyota Corolla
  console.log(car2.getDetails()); // Output: Honda Civic


  // Accessing Properties and Methods:

  console.log(car1.brand); // Output: Toyota
car1.model = "Camry"; // Update property
console.log(car1.getDetails()); // Output: Toyota Camry