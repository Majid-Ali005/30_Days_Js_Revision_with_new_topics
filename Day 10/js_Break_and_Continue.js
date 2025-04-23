// Theory: `break` loop ko stop karta hai, `continue` current iteration skip karta hai.
// Practical: Array mein numbers check karna
const numbers = [1, 2, 3, 4, 5];

// Break Example: Pehla even number milne pe stop
for (let num of numbers) {
  if (num % 2 === 0) {
    console.log("First even number: " + num);
    break; // Loop stop
  }
}
// Output: First even number: 2

// Continue Example: Odd numbers skip karna
for (let num of numbers) {
  if (num % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log("Even number: " + num);
}
// Output:
// Even number: 2
// Even number: 4