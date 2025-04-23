let num = 1;
do {
  console.log("Number: " + num);
  num++;
} while (num <= 3);
// Output:
// Number: 1
// Number: 2
// Number: 3

// practical example
let userInput;
do {
  userInput = prompt("Enter a number greater than 10:");
} while (userInput <= 10);
console.log("You entered: " + userInput);