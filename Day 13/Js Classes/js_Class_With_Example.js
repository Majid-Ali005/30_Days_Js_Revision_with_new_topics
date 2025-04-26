class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  // Creating an instance
  const person1 = new Person("Rahul", 25);
  console.log(person1.greet()); // Output: Hello, my name is Rahul and I'm 25 years old.


  // syntax of the js class
  class ClassName {
    constructor(parameter1, parameter2) {
      this.property1 = parameter1;
      this.property2 = parameter2;
    }
  
    methodName() {
      return `This is a method`;
    }
  }