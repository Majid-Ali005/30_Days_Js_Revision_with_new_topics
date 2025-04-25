// Global scope
const globalVar = "I'm global";

function myFunction() {
  // Function scope
  const functionVar = "I'm local to myFunction";
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
}

myFunction();
console.log(globalVar); // Output: I'm global
console.log(functionVar); // Error: functionVar is not defined