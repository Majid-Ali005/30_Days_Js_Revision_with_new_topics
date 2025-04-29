class Animal {
    speak() {
      console.log("Animal speaks");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Dog barks");
    }
  }
  
  const d = new Dog();
  d.speak(); // Animal speaks (inherited)
  d.bark();  // Dog barks
  