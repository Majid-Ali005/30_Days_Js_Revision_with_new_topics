// 1. add(value): Naya value add karta hai.

let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate ignored
console.log(fruits); // Set(2) {"apple", "banana"}