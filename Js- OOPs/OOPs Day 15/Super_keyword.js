class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // calls Animal's constructor
      this.breed = breed;
    }
  
    speak() {
      super.speak(); // call parent method
      console.log(`${this.name} barks`);
    }
  }
  
  const dog = new Dog("Buddy", "Labrador");
  dog.speak();
  // Output:
  // Buddy makes a sound
  // Buddy barks
  