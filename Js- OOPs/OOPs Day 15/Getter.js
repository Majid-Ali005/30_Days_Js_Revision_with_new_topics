class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const p = new Person("John", "Doe");
  console.log(p.fullName); // John Doe
  