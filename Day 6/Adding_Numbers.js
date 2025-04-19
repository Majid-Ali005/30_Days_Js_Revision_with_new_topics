let x = 10; // x store a value  10
let y = 20; // y store a value  20
let z = x + y; // z store the result of plus x and y variable
console.log(z); // output: 30

// Adding Two Strings
let x1 = "20"; // x1 store the string which is "20"
let y1 = "20"; // y1 is the string which is "20"
let z1 = x1 + y1; // result: "20" + "20" = 2020
console.log(z1); // output: 2020
/**
 * yaha pr aap k pass output me 2020 iss wja se print ho rha hy q k aap string ko bana rhy ho magr oss k andar value numbers hy.
 * magr javaScript me aap jiss b cheez ko double ya phir single quotatoions me likhty hy tho ye oss ko string consider krtha hy iss wja se.
 */

// adding string and numbers
let x2 = 10;
let y2 = "20";
let z2 = x2 + y2;
console.log(z2); // output: 1020


let color = "FF0000";
let red = parseInt(color, 16); // 16711680
console.log(red.toString(16)); // "ff0000"

function processNumber(input) {
    // Convert input to number
    let num = typeof input === "string" ? Number(input) : input;
  
    // Check for NaN
    if (Number.isNaN(num)) {
      return "Error: Not a valid number";
    }
  
    // Check for Infinity
    if (!Number.isFinite(num)) {
      return "Error: Number is Infinity";
    }
  
    // Check if safe integer
    if (!Number.isInteger(num) || !Number.isSafeInteger(num)) {
      return "Warning: Not a safe integer";
    }
  
    // Perform operation (e.g., square the number)
    return num * num;
  }
  
  console.log(processNumber("42")); // 1764
  console.log(processNumber("abc")); // "Error: Not a valid number"
  console.log(processNumber(1 / 0)); // "Error: Number is Infinity"
  console.log(processNumber(9007199254740992)); // "Warning: Not a safe integer"