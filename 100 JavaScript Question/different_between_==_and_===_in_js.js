// equality.js
// Yeh file JavaScript mein `==` aur `===` operators ke difference ko explain karti hai with comments

// 1. BASIC EXAMPLE: Number aur String comparison
// `==` type coercion karta hai, `===` nahi karta
const num = 5; // Number
const str = "5"; // String

console.log("== (loose equality) with number and string:", num == str); // Output: true (string "5" number 5 mein convert hoti hai)
console.log("=== (strict equality) with number and string:", num === str); // Output: false (types alag hain: number vs string)

// 2. EXAMPLE: Null aur Undefined
// `==` null aur undefined ko equal manta hai, `===` nahi
const nullValue = null;
const undefinedValue = undefined;

console.log("== with null and undefined:", nullValue == undefinedValue); // Output: true (JavaScript null aur undefined ko loosely equal manta hai)
console.log("=== with null and undefined:", nullValue === undefinedValue); // Output: false (types alag hain: null vs undefined)

// 3. EXAMPLE: Boolean aur Number
// `==` boolean ko number mein convert karta hai, `===` nahi
const bool = true;
const numOne = 1;

console.log("== with boolean and number:", bool == numOne); // Output: true (true number 1 mein convert hota hai)
console.log("=== with boolean and number:", bool === numOne); // Output: false (types alag hain: boolean vs number)

// 4. EXAMPLE: Empty String aur Zero
// `==` empty string aur 0 ko equal manta hai, `===` nahi
const emptyStr = "";
const zero = 0;

console.log("== with empty string and zero:", emptyStr == zero); // Output: true (empty string number 0 mein convert hoti hai)
console.log("=== with empty string and zero:", emptyStr === zero); // Output: false (types alag hain: string vs number)

// 5. EXAMPLE: Objects comparison
// `==` aur `===` dono objects ke reference compare karte hain, lekin `==` type coercion try karta hai
const obj1 = { name: "Ali" };
const obj2 = { name: "Ali" };
const obj3 = obj1;

console.log("== with objects (different references):", obj1 == obj2); // Output: false (alag references)
console.log("=== with objects (different references):", obj1 === obj2); // Output: false (alag references)
console.log("== with same object reference:", obj1 == obj3); // Output: true (same reference)
console.log("=== with same object reference:", obj1 === obj3); // Output: true (same reference)

// 6. CONNECTING TO PREVIOUS CONTEXT (myFunction se inspired)
// Aapke previous `myFunction` ke saath `==` aur `===` ka use
function myFunction(name, age = 25) {
    return { name, age };
}
const person1 = myFunction("Ali", "25"); // age as string
const person2 = myFunction("Ali", 25);   // age as number

console.log("== with person objects (age string vs number):", person1.age == person2.age); // Output: true (string "25" number 25 mein convert hoti hai)
console.log("=== with person objects (age string vs number):", person1.age === person2.age); // Output: false (types alag hain: string vs number)

// 7. PRACTICAL TIP
// `===` zyadatar prefer kiya jata hai kyunki yeh type-safe hai aur unexpected type coercion se bachata hai
const value1 = "10";
const value2 = 10;
if (value1 == value2) {
    console.log("== allows coercion (less safe):", "Values are equal after coercion"); // Output: Values are equal after coercion
}
if (value1 === value2) {
    console.log("=== checks type (safer):", "This won't run"); // Output: Nothing (condition false)
} else {
    console.log("=== checks type (safer):", "Values or types are different"); // Output: Values or types are different
}