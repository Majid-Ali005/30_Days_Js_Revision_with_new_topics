// Basic Array Destructuring
let colors = ["red", "blue", "green"];
let [first, second] = colors;
console.log(first, second); // red blue

// Rest Parameter
let [primary, ...others] = colors;
console.log(primary, others); // red ["blue", "green"]

// Default Values
let numbers = [1];
let [a, b = 0] = numbers;
console.log(a, b); // 1 0

// Nested Destructuring
let nested = [1, [2, 3], 4];
let [x, [y, z]] = nested;
console.log(x, y, z); // 1 2 3