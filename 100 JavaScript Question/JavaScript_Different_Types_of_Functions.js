// functions.js
// Yeh file JavaScript ke function types ke examples dikhati hai with comments

// 1. FUNCTION DECLARATION
// Yeh function pehle define hota hai aur poore code mein available hota hai (hoisting)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log("Function Declaration:", greet("Ali")); // Output: Hello, Ali!

// 2. FUNCTION EXPRESSION
// Function ko variable mein store karte hain, yeh sirf define hone ke baad call hota hai
const subtract = function(a, b) {
    return a - b;
};
console.log("Function Expression:", subtract(5, 3)); // Output: 2

// 3. ARROW FUNCTION
// ES6 ka chhota syntax, `this` ko outer scope se inherit karta hai
const multiply = (a, b) => a * b;
console.log("Arrow Function:", multiply(5, 3)); // Output: 15

// 4. IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// Yeh function define hote hi run ho jata hai, scope isolate karne ke liye use hota hai
(function() {
    console.log("IIFE: Runs immediately!");
})(); // Output: IIFE: Runs immediately!

// 5. GENERATOR FUNCTION
// Yeh function pause aur resume ho sakta hai, `yield` se values deta hai
function* generateIds() {
    let id = 1;
    yield id++;
    yield id++;
}
const gen = generateIds();
console.log("Generator Function (first yield):", gen.next().value); // Output: 1
console.log("Generator Function (second yield):", gen.next().value); // Output: 2

// 6. ASYNC FUNCTION
// Asynchronous operations ke liye, Promise return karta hai
async function fetchData() {
    return "Data fetched!";
}
fetchData().then(data => console.log("Async Function:", data)); // Output: Data fetched!

// 7. CONSTRUCTOR FUNCTION (Aapke previous myFunction se inspired)
// Objects banane ke liye, `new` ke saath use hota hai
function myFunction(name, age = 25) {
    this.name = name;
    this.age = age;
}
const person = new myFunction("Ali");
console.log("Constructor Function (myFunction):", person); // Output: { name: "Ali", age: 25 }

// 8. CALLBACK FUNCTION
// Dusre function mein argument ke tor par pass hota hai
function processData(callback) {
    console.log("Processing...");
    callback();
}
processData(() => console.log("Callback Function: Done!")); // Output: Processing... Callback Function: Done!

// 9. HIGHER-ORDER FUNCTION
// Function jo function return karta hai ya argument mein leta hai
function withLogging(fn) {
    return function(...args) {
        console.log("Higher-Order Function: Calling function...");
        return fn(...args);
    };
}
const loggedGreet = withLogging(name => `Hello, ${name}!`);
console.log(loggedGreet("Ali")); // Output: Higher-Order Function: Calling function... Hello, Ali!

// 10. METHOD
// Object ke andar function, `this` object ko refer karta hai
const obj = {
    name: "Sara",
    greet: function() {
        return `Method: Hello, ${this.name}!`;
    }
};
console.log(obj.greet()); // Output: Method: Hello, Sara!

// 11. PURE FUNCTION
// Same input ke liye hamesha same output, no side effects
function add(a, b) {
    return a + b;
}
console.log("Pure Function:", add(2, 3)); // Output: 5

// 12. RECURSIVE FUNCTION
// Khud ko call karta hai problem solve karne ke liye
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log("Recursive Function:", factorial(5)); // Output: 120

// 13. `this` KEYWORD WITH FUNCTIONS (Aapke pehle sawaal ke mutabiq)
// Regular function mein `this` context par depend karta hai
const obj2 = {
    name: "Bob",
    greet: function() {
        console.log("Regular Function `this`:", this.name);
    }
};
obj2.greet(); // Output: Regular Function `this`: Bob

// Arrow function mein `this` outer scope se inherit hota hai
const obj3 = {
    name: "Bob",
    greet: () => console.log("Arrow Function `this`:", this.name) // `this` global/window hai
};
obj3.greet(); // Output: Arrow Function `this`: undefined (browser mein window.name nahi hai)