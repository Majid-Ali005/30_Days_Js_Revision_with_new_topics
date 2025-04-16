// let age = 20;
// let status = (age >= 18) ? "adult" : "minor";

// console.log(status); // Output: "adult"

//logical operator with ternary operator
let age = 17;
let hasID = false;
let withParent = true;

let status = (age >= 18 && hasID || withParent) ? "can enter" : "cannot enter";
console.log(status); // Output: "can enter"
