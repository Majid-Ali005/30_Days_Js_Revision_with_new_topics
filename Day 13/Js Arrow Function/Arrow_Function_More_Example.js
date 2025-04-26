// Single parameter
const square = x => x * x;
console.log(square(4)); // Output: 16

// No parameters
const sayHello = () => "Hello!";
console.log(sayHello()); // Output: Hello!

// Multiple lines
const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};
console.log(greet("Rahul")); // Output: Hello, Rahul!