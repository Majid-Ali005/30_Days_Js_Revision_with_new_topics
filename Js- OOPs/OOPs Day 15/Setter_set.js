class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const p = new Person("Jane", "Smith");
  p.fullName = "Alice Johnson";  // Calls the setter
  console.log(p.fullName);       // Alice Johnson
  