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