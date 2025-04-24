// To create set
let mySet = new Set(["hello",12,"ali","apple"]);
console.log(mySet); // output: Set(4) { 'hello', 12, 'ali', 'apple' }
// ye set for ka matlab ye hy k hamare array me 4 four items hy iss wja se ye a rha hy.


// Hum log issi trha different ways se set ko create kr sakty hy
// Empty Set
let emptySet = new Set();
console.log(emptySet); // Set(0) {}

// Set with initial values
let numberSet = new Set([1, 2, 3, 3, 4]);
console.log(numberSet); // Set(4) {1, 2, 3, 4} // Duplicate 3 removed

// Set with mixed data types
let mixedSet = new Set([1, "hello", { name: "John" }]);
console.log(mixedSet); // Set(3) {1, "hello", {name: "John"}}