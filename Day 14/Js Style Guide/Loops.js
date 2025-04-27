// Bad: Unclear function
function fn(x) { return x * x }

// Good: Clear function
const squareNumber = (number) => {
  return number * number;
};

console.log(squareNumber(4)); // Outputs 16


// Bad: Manual loop
let numbers = [1, 2, 3];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}

// Good: Array method
const doubled1 = numbers.map(num => num * 2);

console.log(doubled); // Outputs [2, 4, 6]