// isNaN.js
// Yeh file JavaScript mein isNaN() function ke kaam ko explain karti hai with comments

// isNaN() check karta hai ke value NaN (Not-a-Number) hai ya nahi
// True return hota hai agar value NaN hai, false agar valid number hai

// Example: Different values ke saath isNaN() ka use
console.log("isNaN('text'):", isNaN("text")); // Output: true (text number nahi ban sakta)
console.log("isNaN(42):", isNaN(42)); // Output: false (42 ek valid number hai)
console.log("isNaN('123'):", isNaN("123")); // Output: false (string "123" number 123 mein convert hoti hai)
console.log("isNaN(0/0):", isNaN(0/0)); // Output: true (0/0 NaN hai)

// Connecting to previous context (myFunction ke saath)
function myFunction(name, age) {
    return { name, age };
}
const person = myFunction("Ali", "twenty"); // age as invalid number
console.log("isNaN(person.age):", isNaN(person.age)); // Output: true (string "twenty" NaN deta hai)