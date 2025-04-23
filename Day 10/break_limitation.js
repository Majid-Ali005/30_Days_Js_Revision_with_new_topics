// Theory: `break` loop ko rok deta hai jab condition match hoti hai.
// Practical: Array mein pehla number > 10 find karna
const values = [5, 8, 12, 15, 20];
for (let val of values) {
  if (val > 10) {
    console.log("First value > 10: " + val);
    break; // Stop after finding first
  }
}
// Output: First value > 10: 12

// Practical: While loop mein break
let i = 0;
while (i < 5) {
  if (i === 3) {
    break; // Stop at i=3
  }
  console.log("Index: " + i);
  i++;
}
// Output:
// Index: 0
// Index: 1
// Index: 2