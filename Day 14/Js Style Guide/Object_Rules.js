// Bad: Verbose object
const user = {
    name: name,
    age: age,
    getInfo: function() {
      return this.name + ", " + this.age;
    }
  };
  
  // Good: Shorthand syntax
  const userr = {
    name,
    age,
    getInfo() {
      return `${this.name}, ${this.age}`;
    }
  };
  
  const name = "Alice", age = 25;
  console.log(user.getInfo()); // Outputs "Alice, 25"

  // Best Pracitce