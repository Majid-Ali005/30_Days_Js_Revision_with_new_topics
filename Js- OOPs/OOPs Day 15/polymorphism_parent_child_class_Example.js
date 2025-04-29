// Parent class
class Animal {
    constructor(name) {
      this.name = name;
    }
    makeSound() { // Method to be overridden
      console.log(`${this.name} makes a generic sound.`);
    }
  }
  
  // Child class 1
  class Dog extends Animal {
    makeSound() { // Override parent’s method
      console.log(`${this.name} barks: Woof!`);
    }
  }
  
  // Child class 2
  class Cat extends Animal {
    makeSound() { // Override parent’s method
      console.log(`${this.name} meows: Meow!`);
    }
  }
  
  // Using polymorphism
  const animals = [
    new Animal("Leo"),
    new Dog("Buddy"),
    new Cat("Whiskers")
  ];
  
  // Call the same method on different objects
  animals.forEach(animal => {
    animal.makeSound();
  });