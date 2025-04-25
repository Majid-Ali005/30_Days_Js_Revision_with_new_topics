let age = 25;
let status = age >= 18 ? "Adult" : "Minor"; // Ternary (?) has higher precedence than assignment (=)
console.log(status); // Output: "Adult"

let isValid = age > 18 && status === "Adult"; // Comparison (>) and equality (===) have higher precedence than logical AND (&&)
console.log(isValid); // Output: true