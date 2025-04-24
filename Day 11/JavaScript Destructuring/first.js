// Without destructuring
let person = { name: "John", age: 30 };
let name1 = person.name;
let age1 = person.age;

// With destructuring
let { name, age } = person;
console.log(name, age); // John 30