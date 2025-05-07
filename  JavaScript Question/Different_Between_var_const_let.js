// variables.js
// Yeh file `var`, `const`, aur `let` ke differences ko explain karti hai with comments

// 1. SCOPE DIFFERENCES
// Scope batata hai ke variable kahan accessible hai

// var: Function scope ya global scope (block scope nahi)
// Yeh block ke andar declare hone par bhi bahar accessible hota hai
if (true) {
    var x = 10; // var ka scope block ke bahar tak jata hai
}
console.log("var scope (accessible outside block):", x); // Output: 10

// let: Block scope (sirf uss block mein accessible jahan declare hua)
if (true) {
    let y = 20; // let block ke andar hi limited hai
}
console.log("let scope (not accessible outside block):"); // Output: y is not defined
try {
    console.log(y); // Error: y is not defined
} catch (e) {
    console.log("Error:", e.message); // Output: Error: y is not defined
}

// const: Block scope (let ki tarah, block ke andar limited)
if (true) {
    const z = 30; // const bhi block scope follow karta hai
}
console.log("const scope (not accessible outside block):"); // Output: z is not defined
try {
    console.log(z); // Error: z is not defined
} catch (e) {
    console.log("Error:", e.message); // Output: Error: z is not defined
}

// 2. HOISTING DIFFERENCES
// Hoisting ka matlab hai variable declaration ko code ke top par le jana

// var: Declaration hoisted hoti hai, default value `undefined`
console.log("var before declaration:", varHoist); // Output: undefined (hoisted)
var varHoist = 100;
console.log("var after declaration:", varHoist); // Output: 100

// let: Declaration hoisted hoti hai, lekin Temporal Dead Zone (TDZ) mein access nahi hota
try {
    console.log("let before declaration:", letHoist); // Error: Cannot access 'letHoist' before initialization
} catch (e) {
    console.log("Error:", e.message); // Output: Error: Cannot access 'letHoist' before initialization
}
let letHoist = 200;
console.log("let after declaration:", letHoist); // Output: 200

// const: Declaration hoisted hoti hai, lekin TDZ mein access nahi hota (let ki tarah)
try {
    console.log("const before declaration:", constHoist); // Error: Cannot access 'constHoist' before initialization
} catch (e) {
    console.log("Error:", e.message); // Output: Error: Cannot access 'constHoist' before initialization
}
const constHoist = 300;
console.log("const after declaration:", constHoist); // Output: 300

// 3. REASSIGNMENT DIFFERENCES
// Reassignment ka matlab hai variable ki value change karna

// var: Reassignment allowed, value ko bar-bar change kar sakte hain
var a = 1;
a = 2; // Reassign
console.log("var reassignment:", a); // Output: 2

// let: Reassignment allowed, value change ho sakti hai
let b = 10;
b = 20; // Reassign
console.log("let reassignment:", b); // Output: 20

// const: Reassignment not allowed, value change nahi ho sakti
const c = 100;
// c = 200; // Error: Assignment to constant variable
console.log("const reassignment (not allowed):", c); // Output: 100
try {
    c = 200; // Error
} catch (e) {
    console.log("Error:", e.message); // Output: Error: Assignment to constant variable
}

// Note: const objects/arrays ke andar ke elements change ho sakte hain
const person = { name: "Ali" };
person.name = "Bob"; // Allowed, object ke properties change ho sakte hain
console.log("const object property change:", person); // Output: { name: "Bob" }

// 4. INITIALIZATION DIFFERENCES
// Initialization ka matlab declare karte waqt value dena

// var: Initialization optional, bina value ke `undefined` hota hai
var noInitVar;
console.log("var without initialization:", noInitVar); // Output: undefined

// let: Initialization optional, bina value ke declare kar sakte hain
let noInitLet;
console.log("let without initialization:", noInitLet); // Output: undefined

// const: Initialization mandatory, declare karte waqt value dena zaroori
// const noInitConst; // Error: Missing initializer in const declaration
try {
    const noInitConst; // Error
} catch (e) {
    console.log("Error:", e.message); // Output: Error: Missing initializer in const declaration
}

// 5. PRACTICAL EXAMPLE (Aapke previous context ke mutabiq)
// Yeh example `myFunction` ke saath `var`, `let`, `const` ka use dikhata hai
function myFunction(name, age = 25) {
    var localVar = `Var: ${name}`; // Function scope
    let localLet = `Let: ${name}`; // Block scope
    const localConst = `Const: ${name}`; // Block scope, no reassignment

    console.log("Inside function - var:", localVar); // Output: Var: Ali
    console.log("Inside function - let:", localLet); // Output: Let: Ali
    console.log("Inside function - const:", localConst); // Output: Const: Ali

    // Reassignment examples
    localVar = "Var changed"; // Allowed
    localLet = "Let changed"; // Allowed
    // localConst = "Const changed"; // Error: Assignment to constant variable
}
myFunction("Ali");

// var ka global scope issue
for (var i = 0; i < 2; i++) {
    console.log("var in loop:", i); // Output: 0, 1
}
console.log("var after loop (leaks out):", i); // Output: 2 (var loop ke bahar bhi hai)

// let ka block scope
for (let j = 0; j < 2; j++) {
    console.log("let in loop:", j); // Output: 0, 1
}
try {
    console.log("let after loop:", j); // Error: j is not defined
} catch (e) {
    console.log("Error:", e.message); // Output: Error: j is not defined
}