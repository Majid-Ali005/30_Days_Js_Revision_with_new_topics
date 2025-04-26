// Multiple Parameters
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Amit")); // Output: Hello, Amit!

// Rest Parameters
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(sumAll(1, 2, 3, 4)); // Output: 10