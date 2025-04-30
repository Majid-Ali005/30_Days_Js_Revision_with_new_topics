// Create Person objects using object literals
let person1 = {
    name: "Ali",
    age: 25,
    introduce: function() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
  };
  
  let person2 = {
    name: "Sara",
    age: 30,
    introduce: function() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
  };
  
  // Call introduce() for each person
  console.log(person1.introduce()); // Output: Hi, I'm Ali and I'm 25 years old
  console.log(person2.introduce()); // Output: Hi, I'm Sara and I'm 30 years old