// Object Method
// A method is a function definition stored as a property value.
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  let result = person.fullName();
  console.log(result); // output: John Doe

  // accessing object method
  const person1 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  let result1 = person.fullName();
  console.log(result1); // output: John Doe