class Person {
    constructor(name) {
      this._name = name; // Private-like convention with underscore
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      if (typeof newName === "string" && newName.length > 0) {
        this._name = newName;
      } else {
        throw new Error("Name must be a non-empty string");
      }
    }
  }
  
  const person = new Person("Vikram");
  console.log(person.name); // Output: Vikram
  person.name = "Anil"; // Setter
  console.log(person.name); // Output: Anil
  // person.name = ""; // Error: Name must be a non-empty string