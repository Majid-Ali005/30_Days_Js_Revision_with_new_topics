var a = [1,2];
a.push(3);
// a now is [1,2,3];

// array_add_element.js

// Initial array
let fruits = ["apple", "banana"];
console.log("Initial array:", fruits);

// 1. Using push() - Add to the end
fruits.push("orange");
console.log("After push('orange'):", fruits);

// 2. Using unshift() - Add to the beginning
fruits.unshift("mango");
console.log("After unshift('mango'):", fruits);

// 3. Using index - Add at a specific position
fruits[4] = "grape"; // Note: This creates undefined gaps if index is beyond length
console.log("After fruits[4] = 'grape':", fruits);

// 4. Using splice() - Add at a specific index
fruits.splice(2, 0, "kiwi"); // Insert at index 2, remove 0 elements
console.log("After splice(2, 0, 'kiwi'):", fruits);

// 5. Using spread operator - Create a new array with additional elements
fruits = [...fruits, "pineapple"];
console.log("After spread with 'pineapple':", fruits);