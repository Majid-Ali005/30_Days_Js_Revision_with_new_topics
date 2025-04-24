// 1. add(value): Naya value add karta hai.

let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate ignored
console.log(fruits); // Set(2) {"apple", "banana"}


// Delete Method

let colors = new Set(["red", "blue", "green"]);
colors.delete("blue");
console.log(colors); // Set(2) {"red", "green"}

// js has value method
let numbers = new Set([1, 2, 3]);
console.log(numbers.has(2)); // true
console.log(numbers.has(4)); // false

// js clear method
let animals = new Set(["cat", "dog"]);
animals.clear();
console.log(animals); // Set(0) {}

// js search method

let cities = new Set(["Delhi", "Mumbai", "Bangalore"]);
console.log(cities.size); // 3

// sets are objects

let mySet = new Set();
console.log(typeof mySet); // "object"
console.log(mySet instanceof Set); // true


// the new method

// From Array
let arrSet = new Set([1, 2, 2, 3]);
console.log(arrSet); // Set(3) {1, 2, 3}

// From String
let strSet = new Set("hello");
console.log(strSet); // Set(4) {"h", "e", "l", "o"}

// Empty Set
let emptySet = new Set();
console.log(emptySet); // Set(0) {}
