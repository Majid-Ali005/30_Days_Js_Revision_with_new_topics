class Animal {
    #energy = 100; // Private field
    getEnergy() { // Public method to access private field
      return this.#energy;
    }
    eat() {
      this.#energy += 10;
      console.log(`Energy increased to ${this.#energy}`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof! Energy is " + this.getEnergy());
    }
  }
  
  let dog = new Dog();
  dog.eat(); // Output: Energy increased to 110
  dog.bark(); // Output: Woof! Energy is 110
  // console.log(dog.#energy); // Error: #energy is private