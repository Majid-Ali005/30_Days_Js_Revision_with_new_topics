// Falsy values
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));     2 // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false

// In conditions
const input = "";
if (!input) {
  console.log("Input is empty!"); // Output: Input is empty!
}