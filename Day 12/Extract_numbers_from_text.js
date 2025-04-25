const text = "I have 2 cats and 3 dogs";
const numberRegex = /\d+/g;
const numbers = text.match(numberRegex);
console.log(numbers); // Output: ["2", "3"]

// Example 3: Replace Multiple Spaces with Single Space


const text1 = "Hello    World   !";
const cleanText = text1.replace(/\s+/g, " ");
console.log(cleanText); // Output: "Hello World !"