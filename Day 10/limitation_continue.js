// Theory: `continue` current iteration skip karta hai.
// Practical: Negative numbers skip karna
const numbers = [-1, 2, -3, 4, 5];
for (let num of numbers) {
  if (num < 0) {
    continue; // Skip negative numbers
  }
  console.log("Positive number: " + num);
}
// Output:
// Positive number: 2
// Positive number: 4
// Positive number: 5

// Practical: While loop mein continue
let i = 0;
while (i < 5) {
  i++;
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number: " + i);
}
// Output:
// Odd number: 1
// Odd number: 3
// Odd number: 5