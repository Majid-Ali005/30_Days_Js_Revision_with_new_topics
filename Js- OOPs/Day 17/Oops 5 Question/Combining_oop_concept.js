class Rectangle {
    #width = 0; // Private field
    #height = 0; // Private field
  
    // Method to set dimensions
    setDimensions(width, height) {
      if (width > 0 && height > 0) {
        this.#width = width;
        this.#height = height;
        return `Dimensions set: ${this.#width}x${this.#height}`;
      }
      return "Invalid dimensions";
    }
  
    // Method to calculate area
    getArea() {
      return this.#width * this.#height;
    }
  }
  
  // Create a rectangle object
  let rectangle = new Rectangle();
  
  // Test the methods
  console.log(rectangle.setDimensions(5, 10)); // Output: Dimensions set: 5x10
  console.log(rectangle.getArea()); // Output: 50
  console.log(rectangle.setDimensions(-5, 10)); // Output: Invalid dimensions
  console.log(rectangle.getArea()); // Output: 50 (dimensions unchanged)
  console.log(rectangle.#width); // Error: Private field '#width' is not accessible