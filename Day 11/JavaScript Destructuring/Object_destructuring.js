// Basic Object Destructuring
let person = { name: "Bob", age: 25 };
let { name1, age } = person;
console.log(name, age); // Bob 25

// With Alias
let { name1: userName, age: userAge } = person;
console.log(userName, userAge); // Bob 25

// Default Values
let { name2, role = "user" } = person;
console.log(name, role); // Bob user

// Nested Destructuring
let user = { name: "Alice", address: { city: "Delhi" } };
let { name, address: { city } } = user;
console.log(name1, city); // Alice Delhi