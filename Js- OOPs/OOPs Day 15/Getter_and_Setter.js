class Person {
    constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    }
   get fullName() {
    return `${this.firstName} ${this.lastName}`;
    }
   set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
    }
   }
   let person = new Person('John', 'Doe');
   console.log(person.fullName); // John Doe
   person.fullName = 'Jane Smith';
   console.log(person.fullName); // Jane Smith