class Person {
    greet() {
      console.log("Hello!");
    }
  }
  
  const p = new Person();
  p.greet(); // "Hello!"
  console.log(p.__proto__.greet === Person.prototype.greet); // true
  
  