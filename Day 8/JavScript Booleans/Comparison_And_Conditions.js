// Comparisons
const age = 18;
console.log(age >= 18);     // true
console.log(age === "18");  // false (strict equality)
console.log(age == "18");   // true (loose equality)

// Conditions
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature <= 30 && temperature > 20) {
  console.log("It's pleasant!"); // Output: It's pleasant!
} else {
  console.log("It's cold!");
}