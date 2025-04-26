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