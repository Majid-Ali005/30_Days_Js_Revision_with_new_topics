// Truthy values
console.log(Boolean("hello")); // true
console.log(Boolean(42));      // true
console.log(Boolean({}));      // true
console.log(Boolean([]));      // true
console.log(Boolean(-1));      // true

// In conditions
const name = "Alice";
if (name) {
  console.log("Name exists!"); // Output: Name exists!
}